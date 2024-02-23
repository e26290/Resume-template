const app = Vue.createApp({
    data() {
        return {
            // 填寫：個人資料
            twName: 'Robert Wilson',
            enName: 'Robert',
            jobTitle: 'graphic design',
            address: '台北市',
            about: '短自我介紹',
            email: 'exsample@mail.com',
            tel: '09-1234-5678',
            website: 'https://github.com/',

            // 填寫：重要/特殊事蹟
            prominents: ['123333','123333','123333'],

            // 填寫：工作經歷/實習經驗
            experience: [{
                    name: '台Ｇ電',
                    startDate: '2016',
                    endDate: '2020',
                    jobTitle: '打掃清潔師',
                    content: 'ㄑkdvnkdnvknknk<br>vsdgwe',
                },{
                    name: '台Ｇ電',
                    startDate: '2016',
                    endDate: '2020',
                    jobTitle: '打掃清潔師',
                    content: 'ㄑkdvnkdnvknknk<br>vsdgwe',
                }],

            // 填寫：專業技能
            skills: [{
                    title: 'Back-end',
                    group: ['01','02','03'],
                },{
                    title: 'Front-end',
                    group: ['01','02','03'],
                }],
            skillIcons: ['img/vue.svg','img/vue.svg'],

            // 填寫：學歷
            education: [{
                    name: '台灣大學',
                    major: '電機系',
                    degree: '學士',
                    startDate: '2016',
                    endDate: '2020',
                },{
                    name: '台灣大學',
                    major: '電機系',
                    degree: '學士',
                    startDate: '2016',
                    endDate: '2020',
                }],
        };
    }
});

app.mount('#app');