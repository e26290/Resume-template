const app = Vue.createApp({
    data() {
        return {
            // 填寫：個人資料
            userImg: 'user.jpg',
            twName: '羅伯特',
            enName: 'Robert',
            jobTitle: 'Back end Developer',
            address: '台北市',
            about: '熱情、負責任的後端工程師，擁有豐富的軟體開發經驗和深厚的技術功底。熱愛挑戰，善於解決問題，擁有良好的團隊合作能力和溝通能力。期待能在挑戰性的工作環境中發揮所長，持續學習和成長。',
            email: 'exsample@mail.com',
            tel: '09-1234-5678',
            website: 'https://github.com/',

            // 填寫：重要/特殊事蹟
            prominents: [
                '成功開發並部署了 5 個大型專案，服務超過 10 萬名用戶。',
                '負責設計並開發了 3 個高效率的系統，每天處理超過 100 萬次的請求。',
                '主導並參與了 2 個開源項目，共計貢獻了超過 500 行代碼和 20 次解決問題的提交。'
            ],

            // 填寫：工作經歷/實習經驗
            experience: [{
                    name: 'XYZ 科技股份有限公司',
                    startDate: '2020',
                    endDate: '至今',
                    jobTitle: '後端工程師',
                    content: '<ol><li>負責設計、開發和維護公司的核心後端服務。</li><li>參與制定技術架構，優化系統性能和可擴展性。</li><li>與團隊合作，解決複雜的技術問題，並持續優化產品功能和性能。</li></ol>',
                },{
                    name: 'ABC 科技有限公司',
                    startDate: '2016',
                    endDate: '2020',
                    jobTitle: '軟體工程師',
                    content: '<ol><li>負責開發和維護公司的商業應用程式。</li><li>與產品團隊合作，根據客戶需求設計和開發新功能。</li><li>參與技術方案的討論和決策，協助解決系統和技術問題。</li></ol>',
                },{
                    name: 'BBBBBBEEEEEEE 科技有限公司',
                    startDate: '2015',
                    endDate: '2016',
                    jobTitle: '後端工程師助理',
                    content: '<ol><li>負責開發和維護公司內部系統的後端功能。</li><li>與前端團隊合作，設計和實現 API 接口，以實現前後端數據交互。</li><li>優化和提升系統的性能和穩定性，解決系統中的技術問題。</li><li>參與制定項目開發計劃和技術架構，提供技術指導和支持。</li></ol>',
                }],

            // 填寫：專業技能
            skills: [{
                    title: '程式語言',
                    group: ['Java','Python','C++','Ruby','PHP','Node.js'],
                    skillIcons: ['img/Java.svg','img/Python.svg','img/C++.svg','img/Ruby.svg','img/PHP.svg','img/Nodejs.svg'],
                },{
                    title: '工具和技術',
                    group: ['Git','Gulp','AWS'],
                    skillIcons: ['img/Git.svg','img/Gulp.svg','img/AWS.svg'],
                }],

            // 填寫：學歷
            education: [{
                    name: 'XYZ 大學',
                    major: '軟體工程',
                    degree: '碩士',
                    startDate: '2015',
                    endDate: '2017',
                },{
                    name: 'ABC 大學',
                    major: '資訊工程',
                    degree: '學士',
                    startDate: '2010',
                    endDate: '2014',
                }],
        };
    }
});

app.mount('#app');