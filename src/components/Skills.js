import '../index.css';

const List1 = [{
    skill: "ReactJS",
    paragraph:"Self learned ReactJS through online courses and personal projects",
    img: "https://pbs.twimg.com/card_img/1605134360671305728/o2LqSQI-?format=png&name=medium"
},{
    skill: "Java",
    paragraph:"Learned Java through highschool and college courses",
    img: "https://www.oracle.com/img/tech/cb88-java-logo-001.jpg"
},{
    skill: "C/C++",
    paragraph:"Learned C and C++ through college courses",
    img: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648"
},{
    skill: "Javascript",
    paragraph:"Self learned Javascript through online courses and personal projects",
    img: "https://cdn-cjido.nitrocdn.com/OWBpPGhVFQSOSTFJpSSOzqWMqrFnKYbA/assets/static/optimized/rev-61412d3/wp-content/uploads/2020/02/javascript-logo.jpg"
}]

const List2 = [{
    skill: "HTML and CSS",
    paragraph:"Self learned HTML and CSS through online courses and personal projects",
    img: "https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg"
},{
    skill: "Python",
    paragraph:"Currently learning python through college courses",
    img: "http://businessyield.com/wp-content/uploads/2022/10/Untitled-design-23-2.jpg"
},{
    skill: "Tailwind CSS",
    paragraph:"Learned to use Tailwind CSS through self learning and personal projects",
    img: "https://media.licdn.com/dms/image/C4D12AQGFpWlTXNSosA/article-cover_image-shrink_600_2000/0/1566112800433?e=2147483647&v=beta&t=FLHpFDS4aaKUk-mqlv8U-ur1Zhiizy6n4so6-I1Beeg"
},{
    skill: "C#",
    paragraph:"Self learned C# through a personal project",
    img: "https://www.vektrex.com/downloads/Microsoft-C-Sharp.jpg"
}]

const Skills = () => {
    return (
        <div className='h-[100vh] w-screen max-w-full flex flex-col justify-center items-center bg-slate-200'>
            <h1 className='text-5xl font-bold mb-5'>Skills</h1>
            <Cards list={List1}/>
            <Cards list={List2}/>
        </div>
    );
}

const Card = (props) => {
    return (
        <div className="card w-[15vw] bg-base-100 shadow-xl h-[35vh] flex justify-center items-center">
            <figure className="px-10 pt-10  w-auto h-[2/3] min-w-0]">
                <img src={props.img} alt="No IMG" className="rounded-xl" />
            </figure>
            <div className="card-body pt-[2vh] items-center text-center h-[30%]">
                <h2 className="card-title text-[3vh]">{props.skill}</h2>
                <p className='text-[1.5vh] mt-[2vh]'>{props.paragraph}</p>
            </div>
        </div>
    );
}

const Cards = (props) => {
    return (
        <div className='w-[80vw] flex justify-around mt-10'>
            {props.list.map((lang) => {
                return <Card skill={lang.skill} paragraph={lang.paragraph} img={lang.img}/>
            })}
        </div>
    );
}

export default Skills;