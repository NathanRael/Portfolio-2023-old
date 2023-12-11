export default function About(){
    return (
        <section className="d-flex flex-column row-gap-40 container-fluid mt-240 text-light " id='about'>
            <h1 className="text-light _title-2"><span className="text-primary">About</span> me</h1>
            <div className="container-fluid p-0 m-0 _lead text-light _about ms-16">
                <div className="mb-16">
                    Hello, I'm <span className="_gradient text-gradient">Natanael</span>. <br/>
                </div>
                <div className="mb-16">
                    I am a <span className="_gradient">computer science student</span> at EMIT (Ecole de Management et d'Innovation  Technologique)<br/>
                    in the University of Fianarantsoa.<br/>
                </div>
                <div className="mb-16">
                    I'm intrested on developing an <span className="_gradient">amazing</span> and <span className="_gradient">visual appealing website</span> .I'm currently using some front-end <br/>
                    technologies and libraries such as  <span className="_gradient">React js, bootstrap and jQuery</span>.Continuously  improving my skills is a priority<br/>
                     to ensure that I stay up-to-date in this field. <br/>
                </div>
                <div className="mb-16">
                    Beyond coding, I have also delved   into the realm of <span className="_gradient">3D</span> for a year which has led me into  the word of <span className="_gradient">game</span> <br/>
                    <span className="_gradient">development</span>.<br/>

                </div>
            </div>
        </section>
    )
}