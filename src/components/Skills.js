import '../index.css';

const List1 = [{
    skill: "ReactJS",
    paragraph:"Self learned ReactJS through online courses and personal projects",
    img: "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
},{
    skill: "Java",
    paragraph:"Learned Java through highschool and college courses",
    img: "https://www.oracle.com/img/tech/cb88-java-logo-001.jpg"
},{
    skill: "C/C++",
    paragraph:"Learned C and C++ through college courses",
    img: "https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648"
},{
    skill: "Javascript/Typescript",
    paragraph:"Self learned Javascript and Typescript through online courses and personal projects",
    img: "https://api.workinggears.com/storage/yuxa9EAfarIcX9EK8Ei1JSjwRnP7e0-metaanMtdHMuanBn-.jpg"
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
    img: "https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
},{
    skill: "C#",
    paragraph:"Self learned C# through a personal project",
    img: "https://www.vektrex.com/downloads/Microsoft-C-Sharp.jpg"
}]

const Skills = () => {
    return (
        <div className='pt-5 z-1 h-[100vh] w-screen max-w-full flex flex-col justify-center items-center bg-slate-200'>
            <h1 className='text-[5vh] font-bold mb-5'>Skills</h1>
            <Cards list={List1}/>
            <Cards list={List2}/>
        </div>
    );
}

const Card = (props) => {
    return (
        <div className="card z-1 w-[15vw] bg-base-100 shadow-xl h-[35vh] flex justify-center items-center">
            <figure className="px-[2vw] pt-[4vh]  w-auto h-[2/3] min-w-0]">
                <img src={props.img} alt="No IMG" className="rounded-xl md:max-h-20 lg:max-h-30" />
            </figure>
            <div className="card-body pt-[2vh] items-center text-center h-[30%]">
                <h2 className="card-title text-[3vh]">{props.skill}</h2>
                <p className='text-[1.5vh] mt-[1vh]'>{props.paragraph}</p>
            </div>
        </div>
    );
}

const Cards = (props) => {
    return (
        <div className='z-1 w-[80vw] flex justify-around mt-[5vh]'>
            {props.list.map((lang) => {
                return <Card skill={lang.skill} paragraph={lang.paragraph} img={lang.img}/>
            })}
        </div>
    );
}

export default Skills;