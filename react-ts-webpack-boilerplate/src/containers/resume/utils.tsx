interface arry{
    title:string;
    subTitle:string;
    description:string;
}
interface Category{
    experience:arry[];
    education:arry[];
}
export const data: Category = {
    experience: [
        {
            title:"Consultant",
            subTitle: "XXXXXXXX",
            description: "XXXXXXXXXXXXX"
        },
        {
            title:"Senior Consultant",
            subTitle: "XXXXXXXX",
            description:"XXXXXXXXXXXXXXXXXXX"
        },
        {
            title: "Project Manager",
            subTitle: "XXXXXXXXXXX",
            description: "XXXXXXXXXXXXXXXXXXXx"
        }
    ],
    education: [
        {
            title: "Secondary",
            subTitle: "XXXXXXXX",
            description: "XXXXXXXXXXXXXXXXXx"
        },
        {
            title: "Higher Secondary",
            subTitle: "XXXXXXXXXX",
            description: "XXXXXXXXXXXXXXX"
        },
        {
            title: " XXXXXXX",
            subTitle: "XXXXXXXX",
            description: "XXXXXXXXXXXXXXXXXX"
        }
    ]
}