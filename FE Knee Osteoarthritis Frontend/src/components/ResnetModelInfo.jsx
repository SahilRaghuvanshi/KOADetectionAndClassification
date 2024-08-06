import React from "react";
import Header from "./Header";
import ProjectMembers from "./ProjectMembers";
import ResnetModelSummary from "./ResnetModelSummary";

function ResnetModelInfo() {
  return (
    <div>
      <Header headerContent="Resnet Model"/>
      <div  style={{paddingLeft:"200px",paddingRight:"200px"}}>
        <h1 className="heading-h1" >|||||||||</h1>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>R</span>esnet <span style={{fontSize:"100px"}}>M</span>odel</h1>
        <img src="resnetModel.png"  style={{width:"100%",marginTop:"-15px"}} alt="" />
        <p className="description">ResNet, short for Residual Network, is a groundbreaking deep convolutional neural network architecture designed to tackle the challenges of training very deep neural networks. Introduced by Kaiming He et al. in their 2015 paper, ResNet significantly surpassed previous state-of-the-art performance on various computer vision tasks, including image classification and object detection.</p>
        <p className="description">The key innovation of ResNet lies in its use of residual blocks. These blocks contain shortcut connections, also known as skip connections, which enable the network to bypass one or more layers. This allows the network to learn residual mappings instead of directly learning the desired underlying mapping. By propagating the input through the network along with the residuals, ResNet mitigates the vanishing gradient problem and enables the training of extremely deep networks, reaching depths of over a hundred layers.</p>
        <p className="description">The architecture of ResNet typically consists of several convolutional layers followed by residual blocks. These blocks can be stacked to form deeper networks while maintaining efficient training and better generalization performance. ResNet has become a cornerstone in the field of deep learning, serving as the foundation for numerous subsequent architectures and winning multiple competitions in image recognition tasks, including the ImageNet Large Scale Visual Recognition Challenge (ILSVRC).</p>
        <p className="description">ResNet's success has extended beyond image classification, with adaptations and variations applied to various domains, such as natural language processing, medical imaging, and audio processing, showcasing its versatility and robustness across different applications.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>D</span>ata <span style={{fontSize:"100px"}}>P</span>reprocessing </h1>
        <h2 className="heading-h2">Input X-ray Images</h2>
        <p className="sub-description">Data preprocessing plays a crucial role in enhancing the performance of knee X-ray image classification, particularly when dealing with images classified into 5 grades and organized into 5 folders. Prior to model training, the images undergo resizing to a standardized size of 224x224 pixels, ensuring consistency in dimensions across the dataset. This not only facilitates computational efficiency but also helps in extracting relevant features effectively.

Moreover, data augmentation techniques are applied using the ImageDataGenerator from TensorFlow's Keras API. These techniques, such as horizontal flipping, brightness adjustment, width shifting, and zooming, introduce diversity into the dataset, thereby enriching the training process. For instance, horizontal flipping creates mirrored images, while brightness adjustment and zooming simulate variations in lighting and perspectives commonly encountered in real-world scenarios.

The preprocessing function preprocess_input from the ResNet50 model is applied to normalize pixel values, which aids in stabilizing the training process and improving convergence. With a defined batch size of 50, the augmented images are fed into the model for training over 50 epochs. This comprehensive preprocessing pipeline ensures that the model can effectively learn discriminative features from knee X-ray images, leading to robust classification performance across different grades of knee conditions.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>R</span>esNet <span style={{fontSize:"100px"}}>A</span>rchitecture </h1>
        <p className="description">The ResNet model is built using convolutional blocks. These blocks perform a series of operations to extract features from the image. The image you provided showcases a ResNet-like architecture with several convolutional blocks stacked together. There are two main types of blocks used in ResNets:</p>
        <h2 className="heading-h2">Convolution (Conv) Block:</h2>
        <p className="sub-description">These are the standard convolutional blocks commonly used in CNNs. They typically consist of a convolutional layer followed by a batch normalization layer, a ReLU activation layer, and possibly a pooling layer (like max pooling).</p>
        <h2 className="heading-h2">Identity Block (ID Block):</h2>
        <p className="sub-description">These are the building blocks that differentiate ResNets from standard CNNs. An ID block consists of a skip connection that adds the input of the block to its output. This allows the network to learn residual functions, which helps to address the vanishing gradient problem that can occur in deep neural networks.</p>
        <p className="description">The specific architecture depicted in the image  uses several alternating Conv Blocks and ID Blocks. There are also some additional layers, including:</p>
        <h2 className="heading-h2">Zero Padding: </h2>
        <p className="sub-description">This layer adds zeros around the borders of the image. This can be helpful in preventing the spatial size of the image from shrinking as it passes through the convolutional layers.</p>
        <h2 className="heading-h2">Batch Normalization:</h2>
        <p className="sub-description">This layer helps to normalize the activations of the neurons in a layer, which can improve the training speed and stability of the network.</p>
        <h2 className="heading-h2">Max Pooling:</h2>
        <p className="sub-description">This layer downsamples the image by taking the maximum value from a rectangular region of the image. This can help to reduce the dimensionality of the data and make the network more computationally efficient.</p>
        <h2 className="heading-h2">Dropout:</h2>
        <p className="sub-description">This layer randomly drops a certain percentage of activations from the network during training. This can help to prevent the network from overfitting to the training data.</p>
        <h2 className="heading-h2">Average Pooling:</h2>
        <p className="sub-description">This layer downsamples the image by taking the average value from a rectangular region of the image.</p>
        <h2 className="heading-h2">Flattening:</h2>
        <p className="sub-description">This layer reshapes the output of the convolutional layers into a one-dimensional vector.</p>
        <h2 className="heading-h2">Fully Connected (FC) Layer: </h2>
        <p className="sub-description"> This layer is a standard neural network layer that is used to make the final classification decision.</p>
        <h2 className="heading-h2">Pooling layers:</h2>
        <p className="sub-description">Pooling layers are used in between convolutional layers to reduce the image dimensionality while preserving important features.</p>
        <h2 className="heading-h2">Decoder:</h2>
        <p className="sub-description">his part expands the extracted features back to the original image size (128x128). It uses transposed convolution layers to increase the image resolution and combines them with corresponding features from the encoder path through concatenation layers.</p>
        <h2 className="heading-h2">Final layer:</h2>
        <p className="sub-description">A single convolutional filter is used to generate a 128x128 segmentation mask, where each pixel likely represents the probability of belonging to the cartilage region.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>S</span>oftMax <span style={{fontSize:"100px"}}>F</span>unction</h1>
        <p className="description">The Softmax function is used to convert the output of the FC layer into a probability distribution. This probability distribution indicates the likelihood of the input image belonging to each of the possible classes (in this case, the different grades of knee osteoarthritis).</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>T</span>ransfer <span style={{fontSize:"100px"}}>L</span>earning </h1>
        <p className="description">The process of using a pre-trained model on a new task is called transfer learning. In the context of the image, transfer learning could involve using a ResNet model that has already been trained on a large dataset of images (such as ImageNet) to classify knee X-ray images. The final layers of the pre-trained model can then be fine-tuned on a dataset of knee X-ray images labeled with the severity of knee osteoarthritis.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>O</span>utput: <span style={{fontSize:"100px"}}>C</span>lassification</h1>
        <p className="description">The final output of the model is a classification of the severity of knee osteoarthritis in the X-ray image. The image shows five possible grades: 0 (Normal), 1 (Doubtful), 2 (Mild), 3 (Moderate), and 4 (Severe).</p>
        <p className="description">ResNet models have been shown to be effective for a variety of image classification tasks, including knee osteoarthritis severity classification. By using transfer learning, it is possible to train a ResNet model on a relatively small dataset of knee X-ray images. This can be helpful in situations where there is limited data available.</p>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>Res</span>net <span style={{fontSize:"100px"}}>M</span>odel <span style={{fontSize:"100px"}}>S</span>ummary</h1>
        <ResnetModelSummary/>
        <h1 className="heading-h1"><span style={{fontSize:"100px"}}>M</span>odel <span style={{fontSize:"100px"}}>V</span>isualiztion</h1>
        <img src="resnet_model.png"  style={{width:"100%"}} alt="" />
      </div>
      <ProjectMembers/>
    </div>
  );
}

export default ResnetModelInfo;