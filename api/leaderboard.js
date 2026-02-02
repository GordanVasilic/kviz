import { createClient } from '@vercel/kv';

// Create client with fallback specifically for Upstash integration if Vercel KV is hidden
const kv = createClient({
    url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(request, response) {
    try {
        if (request.method === 'GET') {
            // Fetch top 10 scores
            // We use a Redis Sorted Set (ZSET) for efficient leaderboards
            // ZREVRANGE returns elements from high to low score
            const leaderboard = await kv.zrange('heroj_leaderboard', 0, 9, {
                rev: true,
                withScores: true,
            });

            // Transform generic format [member1, score1, member2, score2] 
            // into friendly JSON [{name, score}, ...]
            const formatted = [];
            for (let i = 0; i < leaderboard.length; i += 2) {
                formatted.push({
                    name: leaderboard[i],
                    score: leaderboard[i + 1]
                });
            }

            return response.status(200).json(formatted);
        }

        if (request.method === 'POST') {
            const { name, score } = request.body;

            if (!name || score === undefined) {
                return response.status(400).json({ error: 'Name and score required' });
            }

            // Add to Sorted Set. 
            // We append a timestamp to name to make it unique in the Set if duplicates are allowed by logic, 
            // but for simple Redis sets, unique members are Keys. 
            // To allow same names with different scores or multiple entries, we usually make the member unique.
            // Ideally: "Name#Timestamp"
            const uniqueMember = `${name}#${Date.now()}`;

            // ZADD key score member
            await kv.zadd('heroj_leaderboard', { score: score, member: uniqueMember });

            return response.status(200).json({ success: true });
        }

        return response.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
