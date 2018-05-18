
import { Injectable } from '@angular/core';

@Injectable()
export class IncidentService {

    constructor(

    ) { }

    getIncidents() {
        return [
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',
                name: 'LG 190 L', category: 'Television', regDate: 'Sep 12,2016', purDate: 'Jun 4 2016', warranty: '2 years', regNo: 'AD12345', mrp: ' Rs 25000',
                status: 'NotScheduled', dealer: { name: 'ABC Dealers Pvt Ltd', address: 'Noida Sec 3', phone: '9874563214' },
                incident: {
                    status: 'New', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }
            },
            {
                img: 'data:image/jpeg;base64,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',
                name: 'Samsung 190 L', category: 'Mobile', regDate: 'Oct 12,2015', purDate: 'Jun 4 2014', warranty: '1 years', regNo: 'AD12347', mrp: ' Rs 15000',
                status: 'Scheduled', dealer: { name: 'XYZ Dealers Pvt Ltd', address: 'Gurugram Sec 3', phone: '9833563214' },
                incident: {
                    status: 'Scheduled', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwq5NJo6FWkhICt7QKo30d_GDW3Igs61oc8xJjUv-I8p4yAgBkYUFhDA9PfRbkGm5OcCMc1_aN&usqp=CAc',
                name: 'LG MN190 Microwave Oven', category: 'Home Appliance', regDate: 'Oct 12,2013', purDate: 'Jun 4 2013', warranty: '1 years', regNo: 'AD12347', mrp: ' Rs 7000',
                status: 'Installed', dealer: { name: 'PQR Dealers Pvt Ltd', address: 'Gurugram Sec 45', phone: '9133563214' },
                incident: {
                    status: 'Engineer Assigned', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }
            },
            {
                img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTpSo_YJ46Qb7nGdH88YXc8M5HCNUo7fv-nrAhhsJjCVvY0Xuvr_GPKybVvBA&usqp=CAc ',
                name: 'Carrier 1.5 Ton Split AC', category: 'Electrical', regDate: 'Oct 12,2013', purDate: 'Oct 4 2016', warranty: '5 years', regNo: 'AD12347', mrp: ' Rs 18000',
                status: 'ProblemInInstallation', dealer: { name: 'MNO Dealers Pvt Ltd', address: 'Rohini Sec 45', phone: '9133563214' },
                incident: {
                    status: 'Fixed', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    commentByEngineer:'IC 345 got burnt and diplay kit is in bad condition, Problem has been fixed temporarily, kit replacement is needed .',
                    fixDate:'10:40 AM, 25 Jun 2018',
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }   
            },
            {
                img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAGAASAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAwUGBwgCBAH/xABCEAABAgQDAwcJBAkFAAAAAAABAgMABAURBhIhEzFBBzZRYXGBkRQVIjJ0g7GysxeT0dIYU1VzhJShwfAWIyRCVP/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAAIBAwMFAAAAAAAAAAAAAAECERIhURMx8AMyQZGh/9oADAMBAAIRAxEAPwC8YQnptmRk3puZVlZZQVrNr6Dq4mF4YMdAHCs9foR86YAr+a5eqSzMOtJos6sIUU5i4gXt4wmOX+l21oc7f96mKQdpj6n16o9Y7z1x0ijzaiMqmweHpH8IemSzC7ft/pX7DnfvUQfb/Sv2HO/eoimF0SfbSVl1rTUkLP4Qh5vmmwPSb6f80h6ZGqF6SfLzSJiaaZXRp5CVqCcwWg2v1XEWvJTTM9KMzcqsOMPIDjax/wBkkXBjIkth6rqeDhZSpDDl3CFp9HKnOfBIJjUWAuZ1J9nETg8n+CCCACGHHXNWe7EfOmH6GDHfNSe7EfOmAM1y8s5NTYYYTmdcWQkXA7yToABrc6CHaXpMwH2W0bN0OoK0OtugoKRfMc24Wsb3tbvEeSkqbRUbvLyIWh5lSyCQjaNrQFG3AFVz2RJKVMNybKJJMxLGYLLtliy20rU40oJzbr5WjruBUNQb23hnJsmZJ5TyZRopW46qyAgi2nG+63G+7S8eB6kPh1CAqXLamy6Hw6nZBANiSrhYkC2+5GmovJJ2osGpgeVNIaLOxf2WidotpaNoEgahObUgdNr3hrdDAp5pq5uX27jLp2gXdtKlOsLCCvduYOu4FQBO+xaUxGyPvyapWebaeSgquhSVJIUFJNlJUlQ3gggxpTk9JOC6USb/AOzbuzGM61d5pc9JstOJcEsw0ypaNUqUNVWPEAm1+Nr7o0VyepKcF0oHizfxUTGVmlUigggiVCI/jzTCc/2I+dMSCI/j7mnPe7+omAM8IZKXSCN5NrR7UpS00VJ9YawkiYRnKSqwJMLJU0hQzqzI6I6a4ZSSmJ10lSk5Uk7xlH4Q0TKyNT3w61FxlT7ZbNgd5IjwzEsFa5xCtEFBtQT5Q0TxWL+Maf5PklODKTc3uxfxJMZoQlnboTn1Cx8Y0zgLmbSPZkxlZpU/wQQRChEfx7zTnvd/UTEgiP495pz3u/qJgDLDk6oOrHQo/GPvnBdrAnxhNbCNsu+/MePXHWwRe2U3jXdnmHRqDihlVqI5VNlSMoJHfAWEg2ym/ZHK0MIOVakg9BMLcZh1LuAzDPTtE/GNU4C5m0j2ZMZWlksqmWglQJziwCr8Y1VgTmdSPZkxNlVP0EEESoRHsfc0573f1ExIYj+Puac97v6iYApJmo0xODH5E0y82XCPKdPWvv6dP79Qj3io4bGBRLKkV+cA0WvVNtt+tzXtbja2/SIh5nqDdMNWmQ2WFZ1pbC/TypOpt3g26DCy6Mt6goqjjSdgRcJChnta97dmsdsx6sxG3x+OWNESfXJmnOYSEo3TF+VpKVLmc4sOvLbS+/pj5XpujP8AJ+iny9KIqCA2S/lHom9ysnrBtp06w1LwjOpw9L4gDGSTNgFhwZiL6ejvEeadw1PN0w1VstBsoS7kCxnCCcoVboveFabz559HXTBJbbaKVJNebdi4lxtxc1ZN1C6hbsOZPhGkMCcz6R7MmM4OYVrErTJOtOrlhLPOJIbSpO0CSfWKbRpDAvM+kezJjn9SJjGW1Jiex9gggjNYiPY/IGE565/V/UTEhjzVKRYqUi/JTSSWXkFCrGx7QeBG+AMgO4kqqJN6mJmSJNSzma4EX3HpECcUVgU5NMEwoyYOjGuXwvFxTfIHKPTTrrWIHm0rWVBJlQbX68w+EJfo/s5s3+pXc1738jH54vq35R068KlXiqsLkE09T/8AxUnRrgP6xy5iusu09NOXMkyosA1rawNwOy+sW59gDV7jEi/5BP545/R+aBuMSuD+CH54Opfk9FeFTsYjqjyZeQceBlw4gZLcAdB3RqfApBwfSCP/ADJit5LkDlmJxp57ELzqUKCilMoEk95UfgYt+RlGZGTYlJZOVlhtLbab3skCwhWva3unJxWK9oLwQQRJv//Z',
                name: 'Samsung 190 L', category: 'Mobile', regDate: 'Oct 12,2015', purDate: 'Jun 4 2014', warranty: '1 years', regNo: 'AD12347', mrp: ' Rs 15000',
                status: 'Installed', dealer: { name: 'XYZ Dealers Pvt Ltd', address: 'Gurugram Sec 3', phone: '9833563214' },
                incident: {
                    status: 'Rejected', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }
            },
            {
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',
                name: 'LG 190 L', category: 'Television', regDate: 'Sep 12,2016', purDate: 'Jun 4 2016', warranty: '2 years', regNo: 'AD12345', mrp: ' Rs 25000',
                status: 'NotScheduled', dealer: { name: 'ABC Dealers Pvt Ltd', address: 'Noida Sec 3', phone: '9874563214' },
                incident: {
                    status: 'Rescheduled', created: '1 day ago', description: "Product's display not working properly",scheduledDate:'11:00 AM, 24 May 2018',
                    reScheduledDate:'11:00 AM, 24 May 2018',
                    engineer:{name:'Mukesh Kumar',phone:'8965471235'},
                    rejectReason:'Product is out of warranty',
                    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tZn7f6OQ2SLG4EguSdCzYPsMjJzURiUuso6wcqvc7EbnMC883A','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OBu3oV53dJWzc-HUyzChgolbkOm7VtSrtKXH_IHuwDRPE0fs3g']
                }
            },
            // {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',name:'LG 190 L',category:'Television',regDate:'Sep 12,2016'},
            // {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkClxoKpZBTqVw_MlQwb5T-pFYLFD7M9QE1T3VxxW4RN4NvYaE',name:'LG 190 L',category:'Television',regDate:'Sep 12,2016'},
        ];   
    }   

}

