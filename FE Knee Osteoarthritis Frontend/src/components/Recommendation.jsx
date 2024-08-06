import React from "react";
import VideoWrapper from "./VideoWrapper";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Partition from "./Partition";

function Recommendation({ outputClass }) {
  // Get the first letter of the outputClass prop
  const firstLetter = outputClass ? outputClass.charAt(0) : null;

  // Function to render content based on outputClass
  const renderContent = () => {
    let videoIndices;
    switch (outputClass) {
        case "Normal":
        videoIndices = [0,1,2,3,4,5,6,7,8,9,10,11];
        return (
            <div>
            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <h1 className="heading-h1">
                <span style={{ fontSize: "100px" }}>{firstLetter}</span>
                {outputClass.substring(1)} <span style={{ fontSize: "100px" }}>K</span>nee{" "}
                <span style={{ fontSize: "100px" }}>O</span>steoarthritis
                </h1>
                <p className="description">Grade 0 in KL grading indicates the absence of radiographic features of knee OA. At this stage, the knee joint appears normal without any signs of osteophytes (bone spurs), joint space narrowing, or subchondral bone changes typically associated with OA. Individuals with Grade 0 knee OA usually do not experience significant symptoms such as pain, stiffness, or functional limitations attributed to OA.</p>
                <p className="description">However, it's important to note that the absence of radiographic changes does not necessarily mean absence of symptoms. Some individuals may still experience knee pain or discomfort due to other factors such as soft tissue injuries, ligamentous instability, or overuse. Therefore, clinical assessment including patient history, physical examination, and evaluation of symptoms is crucial for accurately diagnosing and managing knee conditions, even in the absence of radiographic evidence of OA.</p>
                <p className="description">For individuals identified with Grade 0 knee OA, emphasis is typically placed on preventive measures and lifestyle modifications to maintain joint health and reduce the risk of developing OA in the future. This may include maintaining a healthy weight, engaging in regular exercise to strengthen muscles around the knee joint, adopting proper biomechanics during physical activities, and avoiding activities that place excessive stress on the knee joint. Additionally, implementing strategies for injury prevention and addressing any underlying risk factors can contribute to preserving knee function and overall joint health in the long term.</p>
                </div>
                <Partition/>
                <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <h1 className="heading-h1">
                <span style={{ fontSize: "100px" }}>R</span>ecommended{" "}
                <span style={{ fontSize: "100px" }}>E</span>xercises
                </h1>
                <VideoWrapper column={3} videoIndices={videoIndices}/>
            </div>
            </div>
        );

        case "Doubtful":
        videoIndices = [0,1,2,5,6,7,8,9,10,11];
        return (
            <div>
                <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <h1 className="heading-h1">
                    <span style={{ fontSize: "100px" }}>{firstLetter}</span>
                    {outputClass.substring(1)} <span style={{ fontSize: "100px" }}>K</span>nee{" "}
                    <span style={{ fontSize: "100px" }}>O</span>steoarthritis
                </h1>
                <p className="description">Doubtful knee osteoarthritis (OA), according to the Kellgren-Lawrence (KL) grading system, represents an early stage of joint degeneration with minimal radiographic changes. In this stage, there might be subtle signs such as possible minor osteophytes (bone spurs) or mild joint space narrowing, but these findings are not definitive enough to conclusively diagnose OA. As the term "doubtful" suggests, there is uncertainty regarding the presence of OA based solely on radiographic evidence.</p>
                <p className="description">Individuals with Grade 1 Doubtful knee OA typically do not experience significant symptoms such as pain or functional limitations directly attributable to OA. However, they may report occasional joint discomfort, particularly after strenuous activity or prolonged periods of standing, which could be due to various factors including soft tissue irritation or biomechanical issues.</p>
                <p className="description">Clinically, Grade 1 Doubtful knee OA poses a diagnostic challenge as the radiographic findings may not correlate with the patient's symptoms. Therefore, a comprehensive assessment including patient history, physical examination, and consideration of other imaging modalities may be necessary to establish an accurate diagnosis and determine appropriate management strategies.</p>
                <p className="description">Given the early stage of joint degeneration, management for Grade 1 Doubtful knee OA often involves conservative measures aimed at symptom relief and prevention of disease progression. This may include lifestyle modifications such as weight management, appropriate exercise to strengthen surrounding musculature, and joint protection techniques. Close monitoring and regular follow-up are essential to track any changes in symptoms or radiographic findings over time and to adjust the treatment plan accordingly.</p>
                </div>
                <Partition/>
                <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <h1 className="heading-h1">
                    <span style={{ fontSize: "100px" }}>T</span>reatments{" "}
                </h1>
                <h2 className="heading-h2">Exercise for Strength:</h2>
                <p className="sub-description">In Grade 1 knee osteoarthritis (OA), exercise programs focused on building strength in the muscles surrounding the knee joint can be highly beneficial. Strengthening exercises, such as leg presses, squats, and calf raises, help improve muscle stability and support around the knee, reducing stress on the joint and minimizing pain. By increasing muscle strength, individuals with Grade 1 knee OA can enhance joint function, maintain mobility, and better manage symptoms associated with the condition. These exercises should be performed under the guidance of a qualified healthcare professional or physical therapist to ensure proper technique and progression tailored to individual needs.</p>
                <h2 className="heading-h2">Exercise for Mobility:</h2>
                <p className="sub-description">For Grade 1 knee osteoarthritis (OA), exercises aimed at improving joint mobility and flexibility are essential for maintaining overall joint health and function. Range of motion exercises, including knee bends, leg swings, and heel slides, help preserve joint mobility and prevent stiffness, which is common in early-stage OA. These exercises promote synovial fluid circulation, lubricating the joint and reducing friction, thereby enhancing joint flexibility and reducing discomfort. Incorporating regular mobility exercises into a comprehensive exercise routine can help individuals with Grade 1 knee OA maintain joint function, improve posture, and alleviate symptoms associated with stiffness and reduced range of motion.</p>
                </div>
                <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                <div id="doubtful-carousel" className="carousel slide">
                <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="doubtful1.jpg" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="doubtful2.jpg" className="d-block w-100" style={{height:"700px"}}  alt="..."/>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#doubtful-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#doubtful-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>  
                </div>
                </div>
                <Partition/>
                <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}> 
                <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>R</span>ecommended{" "}
                                <span style={{ fontSize: "100px" }}>E</span>xercises
                </h1>
                <VideoWrapper column={3} videoIndices={videoIndices}/>
                </div>
            </div>
            );

            case "Mild":
                videoIndices = [0,1,2,5,6,7,8,9,10,11];
                return (
                    <div>
                        <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                        <h1 className="heading-h1">
                            <span style={{ fontSize: "100px" }}>{firstLetter}</span>
                            {outputClass.substring(1)} <span style={{ fontSize: "100px" }}>K</span>nee{" "}
                            <span style={{ fontSize: "100px" }}>O</span>steoarthritis
                        </h1>
                        <p className="description">Grade 2 knee osteoarthritis (OA) represents a mild stage of joint degeneration, typically characterized by definite osteophytes (bone spurs) and possible narrowing of the joint space on radiographic imaging, according to the Kellgren-Lawrence (KL) grading system. At this stage, individuals may begin to experience mild to moderate symptoms such as intermittent pain, stiffness, and reduced joint function, particularly during weight-bearing activities or after prolonged periods of rest. While the joint may show signs of structural changes, the symptoms might not significantly impact daily activities or quality of life for most individuals.</p>
                        <p className="description">Management for Grade 2 knee OA often involves a combination of conservative measures aimed at relieving symptoms and preserving joint function. This may include lifestyle modifications such as maintaining a healthy weight, engaging in regular low-impact exercise to strengthen the muscles around the knee joint, and adopting proper biomechanics during physical activities. Additionally, pain management strategies such as over-the-counter or prescription medications, physical therapy, and joint injections may be recommended to alleviate discomfort and improve mobility. Close monitoring and regular follow-up with healthcare providers are essential to track the progression of the condition and adjust the treatment plan as needed. With appropriate management, individuals with Grade 2 knee OA can often maintain an active lifestyle and manage symptoms effectively while delaying the need for more invasive interventions such as surgery.</p>
                        </div>
                        <Partition/>
                        <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>              
                        <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>T</span>reatments{" "}
                        </h1>
                        <h2 className="heading-h2">Taking Pain Relievers:</h2>
                        <p className="sub-description">For Grade 2 knee osteoarthritis (OA), pain relievers such as nonsteroidal anti-inflammatory drugs (NSAIDs) can help alleviate discomfort and reduce inflammation. These medications, available over-the-counter or by prescription, can provide temporary relief from mild to moderate knee pain associated with OA. However, it's essential to use them under medical supervision and follow recommended dosage guidelines to avoid potential side effects such as gastrointestinal irritation or increased risk of cardiovascular events.</p>
                        <h2 className="heading-h2">Physical Therapy:</h2>
                        <p className="sub-description">Physical therapy plays a crucial role in managing Grade 2 knee OA by strengthening the muscles surrounding the knee joint, improving flexibility, and enhancing overall joint function. A physical therapist can design a personalized exercise program tailored to address specific needs and symptoms, including range of motion exercises, strengthening exercises, and low-impact aerobic activities. Additionally, manual therapy techniques such as joint mobilization or soft tissue massage may be utilized to alleviate pain and improve mobility. Consistent participation in physical therapy sessions can help individuals maintain joint health, reduce pain, and enhance quality of life.</p>
                        <h2 className="heading-h2">Wearing a Knee Brace:</h2>
                        <p className="sub-description">Using a knee brace can provide additional support and stability to the knee joint, particularly during weight-bearing activities or movements that exacerbate symptoms of Grade 2 knee OA. Knee braces come in various types, including sleeves, straps, or hinged braces, and can help reduce strain on the joint by redistributing forces and promoting proper alignment. While wearing a knee brace, individuals may experience decreased pain, improved function, and enhanced confidence in performing daily activities. It's essential to consult with a healthcare professional to determine the most suitable type of knee brace and ensure proper fit and usage for optimal effectiveness.</p>
                        <div id="mild-carousel" className="carousel slide">
                        <div className="carousel-inner">
                        <div className="carousel-item ">
                        <img src="mild1.jpg" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                        </div>
                        <div className="carousel-item active">
                        <img src="mild2.jpg" className="d-block w-100" style={{height:"700px"}}  alt="..."/>
                        </div>
                        <div className="carousel-item ">
                        <img src="mild3.png" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                        </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#mild-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#mild-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                        </div>
                        <Partition/>
                        <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>     
                        <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>R</span>ecommended{" "}
                                <span style={{ fontSize: "100px" }}>E</span>xercises
                        </h1>
                        <VideoWrapper column={3} videoIndices={videoIndices}/>
                        </div>
                    </div>
                    );
            
                case "Moderate":
                    videoIndices = [0,1,2,6,7,8];
                    return (
                        <div>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                            <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>{firstLetter}</span>
                                {outputClass.substring(1)} <span style={{ fontSize: "100px" }}>K</span>nee{" "}
                                <span style={{ fontSize: "100px" }}>O</span>steoarthritis
                            </h1>
                            <p className="description">Grade 3 moderate knee osteoarthritis (OA) signifies a significant progression of joint degeneration according to the Kellgren-Lawrence (KL) grading system. In this stage, radiographic findings typically reveal definite osteophytes (bone spurs), notable narrowing of the joint space, and potentially mild to moderate subchondral bone changes. Individuals with Grade 3 knee OA commonly experience persistent symptoms such as pain, stiffness, swelling, and reduced joint function, particularly during weight-bearing activities and movements that require bending or straightening of the knee. These symptoms may significantly impact daily activities and quality of life, leading to functional limitations and mobility issues.</p>
                            <p className="description">Management for Grade 3 moderate knee OA often involves a multifaceted approach aimed at relieving symptoms, preserving joint function, and improving overall quality of life. This may include a combination of conservative treatments such as nonsteroidal anti-inflammatory drugs (NSAIDs), physical therapy, corticosteroid injections, and assistive devices like braces or walking aids to alleviate pain and improve mobility. Additionally, lifestyle modifications such as weight management, low-impact exercise, and joint protection techniques are emphasized to reduce further joint damage and enhance joint stability. In some cases, surgical interventions such as arthroplasty (joint replacement) may be considered for individuals with severe symptoms and functional impairment. Close collaboration with healthcare professionals is essential to develop a personalized treatment plan tailored to the individual's needs, preferences, and overall health status. Regular monitoring and follow-up are crucial to track disease progression and optimize management strategies over time.</p>
                            </div>
                            <Partition/>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>  
                            <h1 className="heading-h1"><span style={{ fontSize: "100px" }}>T</span>reatments{" "}</h1>
                            <h2 className="heading-h2">Taking Over-the-Counter Pain Relievers:</h2>
                            <p className="sub-description">For Grade 3 knee osteoarthritis (OA), over-the-counter pain relievers like acetaminophen or nonsteroidal anti-inflammatory drugs (NSAIDs) are often recommended to manage moderate pain and inflammation. These medications are easily accessible without a prescription and can provide temporary relief from symptoms such as joint discomfort and swelling. However, it's essential to adhere to recommended dosages and guidelines to minimize the risk of side effects, especially with prolonged use. Regular monitoring by a healthcare professional is advisable to ensure the safe and effective use of over-the-counter pain relievers for Grade 2 knee OA management.</p>
                            <h2 className="heading-h2">Pain Relievers:</h2>
                            <p className="sub-description">In Grade 3 knee osteoarthritis (OA), pain relievers such as nonsteroidal anti-inflammatory drugs (NSAIDs) or acetaminophen are commonly prescribed to alleviate moderate to severe pain and inflammation associated with the condition. NSAIDs like ibuprofen or naproxen work by reducing prostaglandin production, which contributes to pain and inflammation in the affected joints. Acetaminophen, on the other hand, provides pain relief by blocking pain signals in the brain and spinal cord. These medications can offer significant short-term relief, but their long-term use requires careful monitoring to minimize potential side effects such as gastrointestinal irritation, cardiovascular risks, or kidney dysfunction.</p>
                            <h2 className="heading-h2">Corticosteroid Injections:</h2>
                            <p className="sub-description">Corticosteroid injections are a treatment option for Grade 3 knee osteoarthritis (OA) aimed at providing targeted relief from pain and inflammation in the affected joint. These injections contain powerful anti-inflammatory medications, such as cortisone, which are directly administered into the knee joint space under the guidance of a healthcare professional. Corticosteroids work by suppressing inflammation and reducing swelling, leading to improved joint function and decreased pain. While corticosteroid injections can offer significant short-term benefits, they are typically reserved for individuals who have not responded adequately to other conservative treatments and may be associated with potential risks such as infection, joint damage, or temporary elevation of blood sugar levels in individuals with diabetes. Therefore, careful consideration and discussion with a healthcare provider are essential before opting for corticosteroid injections for Grade 2 knee OA management.</p>
                            <div id="moderate-carousel" className="carousel slide">
                            <div className="carousel-inner">
                            <div className="carousel-item ">
                            <img src="moderate1.jpg" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="moderate2.jpg" className="d-block w-100" style={{height:"700px"}}  alt="..."/>
                            </div>
                            <div className="carousel-item active">
                            <img src="moderate3.jpg" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#moderate-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#moderate-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>   
                            </div>
                            </div>
                            <Partition/>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>  
                            <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>R</span>ecommended{" "}
                                <span style={{ fontSize: "100px" }}>E</span>xercises
                            </h1>
                            <VideoWrapper column={3} videoIndices={videoIndices}/>
                            </div>
                        </div>
                        );
                case "Severe":
                    videoIndices = [0,1,2,6,7,8];
                    return (
                        <div>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>
                            <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>{firstLetter}</span>
                                {outputClass.substring(1)} <span style={{ fontSize: "100px" }}>K</span>nee{" "}
                                <span style={{ fontSize: "100px" }}>O</span>steoarthritis
                            </h1>
                            <p className="description">Grade 4 severe knee osteoarthritis (OA) represents an advanced stage of joint degeneration characterized by extensive structural damage and significant loss of joint space according to the Kellgren-Lawrence (KL) grading system. Radiographic findings typically show marked osteophyte formation, severe narrowing of the joint space, and substantial subchondral bone changes. Individuals with Grade 4 knee OA often experience debilitating symptoms including chronic and severe pain, stiffness, swelling, joint instability, and significant functional impairment. Daily activities such as walking, climbing stairs, and standing become challenging, severely impacting quality of life and mobility.</p>
                            <p className="description">Management for Grade 4 severe knee OA is focused on alleviating symptoms, improving function, and enhancing quality of life. Conservative treatments may include a combination of pain medications, corticosteroid injections, physical therapy, and assistive devices such as knee braces or canes to support mobility and reduce discomfort. However, for individuals with advanced disease and severe symptoms that do not respond adequately to conservative measures, surgical interventions such as total knee arthroplasty (TKA) or knee replacement surgery may be recommended. TKA involves replacing the damaged knee joint with prosthetic components to relieve pain, restore function, and improve overall joint stability. Close collaboration between healthcare providers and individuals with severe knee OA is essential to develop a comprehensive treatment plan tailored to address their unique needs and optimize outcomes. Regular monitoring and follow-up care are essential to ensure ongoing management and long-term success following surgical intervention.</p>
                            </div>
                            <Partition/>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>  
                            <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>T</span>reatments{" "}
                            </h1>
                            <h2 className="heading-h2">Replacement Surgery:</h2>
                            <p className="sub-description">For Grade 4 knee osteoarthritis (OA), where severe joint damage has occurred, total knee replacement surgery may be recommended. This surgical procedure involves replacing the damaged knee joint with artificial components made of metal and plastic. During the surgery, the damaged portions of the knee joint, including the cartilage and bone, are removed and replaced with prosthetic components to restore joint function and alleviate pain. Total knee replacement surgery can significantly improve quality of life by reducing pain, restoring mobility, and allowing individuals to resume normal activities with proper rehabilitation and post-operative care.</p>
                            <h2 className="heading-h2">Realigning the Joint:</h2>
                            <p className="sub-description">In cases of Grade 4 knee osteoarthritis (OA) where joint deformity or misalignment is present, realignment procedures may be considered to improve joint function and alleviate symptoms. These procedures, such as osteotomy or corrective surgery, involve surgically altering the alignment of the bones surrounding the knee joint to redistribute weight-bearing forces more evenly. By correcting joint alignment, realignment surgeries can help reduce pain, slow disease progression, and delay the need for more invasive interventions like joint replacement surgery. However, realignment procedures are typically reserved for select cases and require careful evaluation and consideration by a healthcare provider.</p>
                            <div id="severe-carousel" className="carousel slide">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="severe1.jpg" className="d-block w-100" style={{height:"700px"}} alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="severe2.jpg" className="d-block w-100" style={{height:"700px"}}  alt="..."/>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#severe-carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#severe-carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>   
                            </div>
                            </div>
                            <Partition/>
                            <div className="recommendation-container" style={{ paddingLeft: "200px", paddingRight: "200px" }}>  
                            <h1 className="heading-h1">
                                <span style={{ fontSize: "100px" }}>R</span>ecommended{" "}
                                <span style={{ fontSize: "100px" }}>E</span>xercises
                            </h1>
                            <VideoWrapper column={3} videoIndices={videoIndices}/>
                            </div>
                        </div>
                        );

      default:
        return null;
    }
  };

  return renderContent();
}

export default Recommendation;
