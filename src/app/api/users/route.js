export async function GET (req, res, next){
    let users=[
        {
            id:1,
            name:"Faisal",
            email:"hayatfaisal355@gmail.com",
        },
        {
            id:2,
            name:"Hayat",
            email:"hayatfaisal0355@gmail.com",
        }
    ];
    let data = JSON.stringify(users)
    return new Response(data,{status:200})
}