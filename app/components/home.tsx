import SocialIcons from "./socialIcons";

export default function Home(): JSX.Element {

   
    return (
        <div className='home-main'>
            <SocialIcons/>
            <div className='profile-hero'>
                <div className='profile-hero-greet'>
                    <div style={{
                        width: '1%',
                    }}>
                        &nbsp;
                    </div>
                    <div className='divrofile-hero-greet-text'>
                        {/* Hi , I'm */}
                    </div>
                </div>
                <div className='short-info'>
                    <h1 className='profile-hero-name'>
                        <span
                            style={
                                {
                                    color: '#f5f5f5',
                                    fontWeight: 300
                                }
                            }
                        >
                            MUHAMMED &nbsp;
                            SHAKIR C K
                        </span>
                    </h1>
                    <h2 className='current-company'>
                        SDE II @ <span className='colored-one' style={{ margin: 0 }}>NeoITO</span>
                    </h2>
                </div>
                <div className='profile-hero-desc'>
                    <p>
                        I am an Experienced Fullstack/Backend Software Engineer with 2+ years of experience,
                        proficient in programming languages such as
                        <span className='colored-one'>
                            C++,
                            Java,
                            JavaScript,
                            TypeScript,
                            and Go.
                        </span>
                        Skilled in cloud technologies such as
                        <span className='colored-one'>

                            AWS,
                            Firebase,
                            and GCP,
                        </span>
                        as well as frameworks and tools including
                        <span className='colored-one'>
                            Express,
                            React,
                            Node.js,
                            MongoDB, and
                            PostgreSQL .
                        </span>
                        Experienced in collaborative problem-solving and microservices architecture. Passionate about learning and exploring new technologies in Software Engineering.

                    </p>

                </div>


            </div>



        </div>
    )
}
