import React from "react";
import Header from "./Header";
import UnetModelSummary from "./UnetModelSummary";
import ProjectMembers from "./ProjectMembers";

function UnetModelInfo() {
  return (
    <div>
      <Header headerContent="Unet Model"/>
      <div  style={{paddingLeft:"200px",paddingRight:"200px"}}>
        <h1 className="heading-h1" >|||||||||</h1>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>U</span>-net <span style={{fontSize:"100px"}}>M</span>odel</h1>
        <img src="unetmodel.png"  style={{width:"100%"}} alt="" />
        <p className="description">The U-Net model, initially introduced by Olaf Ronneberger et al. in 2015, revolutionized biomedical image segmentation. Named after its U-shaped architecture, the U-Net model has since found widespread application in various image segmentation tasks beyond medical imaging, such as satellite imagery, industrial quality control, and more.</p>
        <p className="description">At its core, the U-Net architecture consists of a contracting path, akin to a typical convolutional neural network (CNN), followed by an expansive path, which allows precise localization. The contracting path is composed of convolutional and pooling layers, designed to capture the contextual information of the input image. These layers progressively reduce the spatial resolution while increasing the feature channels, enabling the extraction of high-level features. The expansive path, on the other hand, is formed by upsampling and concatenation operations, which aim to recover the spatial information lost during the contracting path. By leveraging skip connections, the U-Net model efficiently combines low-level features with high-level features, facilitating precise localization of objects in the image. Moreover, the skip connections mitigate the vanishing gradient problem, enabling effective training even with a small dataset.</p>
        <p className="description">One notable feature of the U-Net model is its symmetric architecture, which enables pixel-wise predictions while preserving spatial information. This architecture makes U-Net particularly suitable for tasks requiring precise segmentation, such as delineating individual organs or structures within medical images. The U-Net model has been further enhanced and optimized through various modifications, including the addition of batch normalization, dropout layers, and different activation functions, to improve its performance and generalization capabilities. Additionally, several variants of the U-Net architecture, such as the Nested U-Net and Attention U-Net, have been proposed to address specific challenges and further improve segmentation accuracy.</p>
        <p className="description">Overall, the U-Net model stands as a landmark in the field of image segmentation, offering a powerful and versatile framework for accurately delineating objects of interest in various domains, ranging from medical imaging to remote sensing and beyond. Its robust performance, coupled with its flexibility and interpretability, continues to drive advancements in computer vision applications.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>U</span>-net <span style={{fontSize:"100px"}}>M</span>odel <span style={{fontSize:"100px"}}>S</span>ummary</h1>
        <UnetModelSummary/>
        <p className="description">The provided model summary describes a convolutional neural network (CNN) architecture commonly used for image segmentation tasks. Here's a breakdown of the model for knee Osteoarthritis Cartilage segmentation.</p>
        <p className="description" style={{fontWeight:"bolder"}}>The model takes a 128x128x3 image as input, likely representing an RGB knee X-ray.</p>
        <h2 className="heading-h2">Encoder:</h2>
        <p className="sub-description">The initial layers perform feature extraction. They use convolutional filters to learn patterns from the input image, progressively reducing its size while increasing the number of filters (16, 32, 64, 128, 256). Dropout layers are introduced to prevent overfitting.</p>
        <h2 className="heading-h2">Pooling layers:</h2>
        <p className="sub-description">Pooling layers are used in between convolutional layers to reduce the image dimensionality while preserving important features.</p>
        <h2 className="heading-h2">Decoder:</h2>
        <p className="sub-description">his part expands the extracted features back to the original image size (128x128). It uses transposed convolution layers to increase the image resolution and combines them with corresponding features from the encoder path through concatenation layers.</p>
        <h2 className="heading-h2">Final layer:</h2>
        <p className="sub-description">A single convolutional filter is used to generate a 128x128 segmentation mask, where each pixel likely represents the probability of belonging to the cartilage region.</p>
        <p className="description">Overall, this U-Net architecture effectively captures contextual information from the input image to segment the knee cartilage in the presence of Osteoarthritis.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>M</span>odel <span style={{fontSize:"100px"}}>V</span>isualiztion</h1>
        <img src="unet_model.png"  style={{width:"100%"}} alt="" />
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>S</span>egmentation <span style={{fontSize:"100px"}}>S</span>ystem <span style={{fontSize:"100px"}}>A</span>rchitecture</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="unet-architecture.png"  style={{width:"70%"}} alt="" />
        </div>
        <p className="description">Training a UNet model for knee X-ray image segmentation involves a meticulous process aimed at enhancing its ability to accurately delineate knee structures. Initially, a dataset comprising knee X-ray images and their corresponding manually created masks is essential. These masks outline regions of interest within the X-ray images, such as bones, cartilage, and soft tissues, providing ground truth annotations for the model to learn from. The supervised training commences with inputting the knee X-ray images along with their corresponding masks into the UNet architecture. UNet, known for its effectiveness in biomedical image segmentation tasks, comprises an encoder-decoder structure with skip connections, facilitating precise localization of features at various scales. During training, the model iteratively adjusts its internal parameters through backpropagation, minimizing the discrepancy between predicted masks and ground truth masks. This process involves optimizing a predefined loss function, often incorporating metrics like binary cross-entropy or Dice similarity coefficient to quantify the dissimilarity between predicted and actual masks. As the training progresses over epochs, the UNet model gradually learns to capture intricate patterns and textures indicative of different knee structures. Fine-tuning hyperparameters such as learning rate, batch size, and augmentation techniques like rotation or scaling can further refine the model's performance.</p>
        <p className="description">Once the training converges, the trained UNet model can be deployed to segment knee X-ray images in real-world scenarios. When presented with preclassified knee X-ray images, the model swiftly processes them to generate corresponding masks. These masks highlight regions of interest, aiding clinicians in diagnosing conditions such as osteoarthritis by assessing features like joint space narrowing and osteophyte formation, based on the Kellgren-Lawrence (KL) grading system. The application of the trained UNet model streamlines the segmentation process, expediting diagnostic workflows and potentially enhancing diagnostic accuracy. Furthermore, it holds promise for assisting radiologists in efficiently analyzing large volumes of knee X-ray data, thereby contributing to improved patient care and management of musculoskeletal conditions.</p>
      </div>
      <ProjectMembers/>
    </div>
  );
}

export default UnetModelInfo;