

export default function Home(): JSX.Element {

   
    return (
        <div className='home-main'>
            {/* <SocialIcons/> */}
            <div className='profile-hero '>
                <div className='profile-hero-greet'>
                    <div style={{
                        width: '1%',
                    }}>
                        &nbsp;
                    </div>
                    <div className='divrofile-hero-greet-text '>
                        {/* Hi , I'm */}
                    </div>
                </div>
                <div className='short-info animate-text animatefor5ms animatedelay1s'>
                    <h1 className='profile-hero-name scale-up-center scale-up-ver-top transition'>
                        <span
                            style={
                                {
                                    color: '#f5f5f5',
                                    fontWeight: 300
                                }
                            }
                            className="transition-company"
                        >
                            MUHAMMED &nbsp;
                            SHAKIR C K
                        </span>
                    </h1>
                    <h2 className='current-company scale-up-center transition animate-text animatefor7ms animatedelay1s'>
                        Senior Software Engineer @ <span className='colored-one transition-company' style={{ margin: 0 }}>NeoITO</span>
                    </h2>
                </div>
                <div className='profile-hero-desc scale-up-center animate-desc animatefor9ms animatedelay1s '>
                    <p className="scale-up-ver-top">
                        I am an Experienced Fullstack/Backend Software Engineer with 3+ years of experience,
                        proficient in programming languages such as
                        <span className='colored-one'>
                            C++,
                            Java,
                            JavaScript,
                            TypeScript,
                            Python
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
                            MongoDB, PostgreSQL and Apache Airflow
                        </span>
                        Experienced in collaborative problem-solving and microservices architecture. Passionate about learning and exploring new technologies in Software Engineering.

                    </p>

                </div>


            </div>



        </div>
    )
}
