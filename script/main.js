Vue.createApp({
    data() {
        return {
            content : {
                head: "HEY THERE",
                nama: "I'M RIFKY RAMADHAN",
                location: "Based In Indonesia"
            },
            social_media : {
                instagram: 'https://www.instagram.com/rifkyyrmdhn/',
                github: 'https://github.com/rifkyr990',
                facebook: 'https://www.facebook.com/rifky.ramadhan09'
            },
            aboutMe: {
                "nama": "Rifky Ramadhan",
                "posisi": "Web Developer",
                "story": "Saya adalah seorang web developer yang berdedikasi dalam pengembangan aplikasi web menggunakan framework Laravel.Saya sangat tertarik dengan Laravel karena framework ini menyediakan struktur yang baik dan fitur yang lengkap untuk membuat aplikasi web yang berkualitas. Saya senang belajar dan mencoba teknologi baru untuk meningkatkan kemampuan saya sebagai web developer. Saya memahami betul betapa pentingnya desain yang baik dan user experience dalam sebuah aplikasi web, oleh karena itu saya selalu berusaha untuk memberikan yang terbaik dalam setiap proyek yang saya kerjakan. Saya juga senang bekerja sama dengan tim dan klien untuk memahami kebutuhan dan tujuan mereka, dan berusaha untuk memberikan solusi yang sesuai dengan kebutuhan tersebut. Saya berharap dapat bekerja dan membantu dalam pengembangan aplikasi web yang inovatif dan efisien.",
                "image": "./img/IMG_2415.JPG"
            },
            articles: [],
            article: null,
        };
    },
    async created() {
        try {
            const res = await axios.get('https://my-json-server.typicode.com/rifkyr990/tekweb2022/article');
            this.articles = res.data;
        } catch (error) {
            console.error(error);
        }
    }
}).mount("#app");
