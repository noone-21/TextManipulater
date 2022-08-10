import React from 'react'

export default function About(props) {
    
    return (
        <>
            <div className='container' >
                <h1 className='my-3' style={{ marginLeft: '450px' }} >About Us</h1>
                <div className="accordion my-3" id="accordionExample" >
                    <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }}>
                        <h2 className="accordion-header" id="headingOne" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }}>
                            <button className="accordion-button" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               Through Text-Utils you can analyze or manupilate your text in any way you can. Explore different features and start using Text-utils now.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                You don't have to pay anything to use text-utils. It is a compleyely free app through which you can easily analyze your text free of cost.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={{
                    backgroundColor: props.mode === 'dark' ? '#395B64' : 'white', borderColor: props.mode === 'dark' ? '#2C3333' : '#A5C9CA',
                    
                }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Broswer Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse my-3" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                It is a browser compatible app, as you can run it on any browser and on any screen size.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
