# 🛡️ Kviz Znanja: Bezbjednost na Internetu

Edukativna web aplikacija za učenike osnovnih škola. Kviz pokriva teme:
- 🌐 Bezbjednost na internetu
- 🤝 Internet bonton (Netiquette)
- 🎮 PEGI oznake za igrice

## 🚀 Kako pokrenuti

Jednostavno otvorite `index.html` u bilo kojem pregledniku. Nije potrebna instalacija.

## ☁️ Deployment na Vercel

Ova aplikacija je spremna za Vercel ("Zero Config").

1.  Gurnite (Push) ovaj kod na GitHub/GitLab/Bitbucket.
2.  Ulogujte se na [Vercel](https://vercel.com).
3.  Kliknite "Add New..." -> "Project".
4.  Importujte vaš repozitorijum.
5.  Kliknite **Deploy**.

Vercel će automatski prepoznati statički HTML sajt i objaviti ga.

## ☁️ Deployment na Vercel i Globalna Rang Lista

Da bi rang lista radila globalno (na svim uređajima), koristi se **Vercel KV**.
Ovo je dostupno i na **Besplatnom (Hobby)** nalogu! (Dovoljno za hiljade igrača).

1.  Gurnite (Push) ovaj kod na GitHub.
2.  Importujte projekat na Vercel.
3.  Kada se deploy završi, idite na **Settings** vašeg projekta na Vercelu.
4.  Kliknite na tab **Storage**.
5.  Kliknite **Create Database** -> izaberite **KV (Redis)**.
6.  Samo kliknite **Create** (ostavite sve default).
7.  Idite na tab **Deployments**, kliknite na tri tačkice zadnjeg deploy-a i **Redeploy**.

To je to! 🎉
Sada će kviz pamtiti rezultate u oblaku.

> **Napomena:** Ako pokrenete kviz samo klikom na `index.html` (lokalno), rang lista će i dalje raditi, ali će čuvati rezultate samo na vašem kompjuteru (Lokalni mod). Kviz je pametan i sam prebacuje modove.
