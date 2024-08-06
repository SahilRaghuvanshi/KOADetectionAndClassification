import React from "react";

function UnetModelSummary() {
  return (
<table className="model-summary">
  <thead>
    <tr>
      <th>Layer (type)</th>
      <th>Output Shape</th>
      <th>Param #</th>
      <th>Connected to</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>input_1 (InputLayer)</td>
      <td>[(None, 128, 128, 3)]</td>
      <td>0</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>lambda (Lambda)</td>
      <td>(None, 128, 128, 3)</td>
      <td>0</td>
      <td>['input_1[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d (Conv2D)</td>
      <td>(None, 128, 128, 16)</td>
      <td>448</td>
      <td>['lambda[0][0]']</td>
    </tr>
    <tr>
      <td>dropout (Dropout)</td>
      <td>(None, 128, 128, 16)</td>
      <td>0</td>
      <td>['conv2d[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_1 (Conv2D)</td>
      <td>(None, 128, 128, 16)</td>
      <td>2320</td>
      <td>['dropout[0][0]']</td>
    </tr>
    <tr>
      <td>max_pooling2d (MaxPooling2D)</td>
      <td>(None, 64, 64, 16)</td>
      <td>0</td>
      <td>['conv2d_1[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_2 (Conv2D)</td>
      <td>(None, 64, 64, 32)</td>
      <td>4640</td>
      <td>['max_pooling2d[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_1 (Dropout)</td>
      <td>(None, 64, 64, 32)</td>
      <td>0</td>
      <td>['conv2d_2[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_3 (Conv2D)</td>
      <td>(None, 64, 64, 32)</td>
      <td>9248</td>
      <td>['dropout_1[0][0]']</td>
    </tr>
    <tr>
      <td>max_pooling2d_1 (MaxPooling2D)</td>
      <td>(None, 32, 32, 32)</td>
      <td>0</td>
      <td>['conv2d_3[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_4 (Conv2D)</td>
      <td>(None, 32, 32, 64)</td>
      <td>18496</td>
      <td>['max_pooling2d_1[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_2 (Dropout)</td>
      <td>(None, 32, 32, 64)</td>
      <td>0</td>
      <td>['conv2d_4[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_5 (Conv2D)</td>
      <td>(None, 32, 32, 64)</td>
      <td>36928</td>
      <td>['dropout_2[0][0]']</td>
    </tr>
    <tr>
      <td>max_pooling2d_2 (MaxPooling2D)</td>
      <td>(None, 16, 16, 64)</td>
      <td>0</td>
      <td>['conv2d_5[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_6 (Conv2D)</td>
      <td>(None, 16, 16, 128)</td>
      <td>73856</td>
      <td>['max_pooling2d_2[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_3 (Dropout)</td>
      <td>(None, 16, 16, 128)</td>
      <td>0</td>
      <td>['conv2d_6[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_7 (Conv2D)</td>
      <td>(None, 16, 16, 128)</td>
      <td>147584</td>
      <td>['dropout_3[0][0]']</td>
    </tr>
    <tr>
      <td>max_pooling2d_3 (MaxPooling2D)</td>
      <td>(None, 8, 8, 128)</td>
      <td>0</td>
      <td>['conv2d_7[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_8 (Conv2D)</td>
      <td>(None, 8, 8, 256)</td>
      <td>295168</td>
      <td>['max_pooling2d_3[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_4 (Dropout)</td>
      <td>(None, 8, 8, 256)</td>
      <td>0</td>
      <td>['conv2d_8[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_9 (Conv2D)</td>
      <td>(None, 8, 8, 256)</td>
      <td>590080</td>
      <td>['dropout_4[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_transpose (Conv2DTranspose)</td>
      <td>(None, 16, 16, 128)</td>
      <td>131200</td>
      <td>['conv2d_9[0][0]']</td>
    </tr>
    <tr>
      <td>concatenate</td>
      <td>(None, 16, 16, 256)</td>
      <td>0</td>
      <td>['conv2d_transpose[0][0]', 'conv2d_7[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_10 (Conv2D)</td>
      <td>(None, 16, 16, 128)</td>
      <td>295040</td>
      <td>['concatenate[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_5 (Dropout)</td>
      <td>(None, 16, 16, 128)</td>
      <td>0</td>
      <td>['conv2d_10[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_11 (Conv2D)</td>
      <td>(None, 16, 16, 128)</td>
      <td>147584</td>
      <td>['dropout_5[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_transpose_1 (Conv2DTranspose)</td>
      <td>(None, 32, 32, 64)</td>
      <td>32832</td>
      <td>['conv2d_11[0][0]']</td>
    </tr>
    <tr>
      <td>concatenate_1</td>
      <td>(None, 32, 32, 128)</td>
      <td>0</td>
      <td>['conv2d_transpose_1[0][0]', 'conv2d_5[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_12 (Conv2D)</td>
      <td>(None, 32, 32, 64)</td>
      <td>73792</td>
      <td>['concatenate_1[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_6 (Dropout)</td>
      <td>(None, 32, 32, 64)</td>
      <td>0</td>
      <td>['conv2d_12[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_13 (Conv2D)</td>
      <td>(None, 32, 32, 64)</td>
      <td>36928</td>
      <td>['dropout_6[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_transpose_2 (Conv2DTranspose)</td>
      <td>(None, 64, 64, 32)</td>
      <td>8224</td>
      <td>['conv2d_13[0][0]']</td>
    </tr>
    <tr>
      <td>concatenate_2</td>
      <td>(None, 64, 64, 64)</td>
      <td>0</td>
      <td>['conv2d_transpose_2[0][0]', 'conv2d_3[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_14 (Conv2D)</td>
      <td>(None, 64, 64, 32)</td>
      <td>18464</td>
      <td>['concatenate_2[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_7 (Dropout)</td>
      <td>(None, 64, 64, 32)</td>
      <td>0</td>
      <td>['conv2d_14[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_15 (Conv2D)</td>
      <td>(None, 64, 64, 32)</td>
      <td>9248</td>
      <td>['dropout_7[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_transpose_3 (Conv2DTranspose)</td>
      <td>(None, 128, 128, 16)</td>
      <td>2064</td>
      <td>['conv2d_15[0][0]']</td>
    </tr>
    <tr>
      <td>concatenate_3</td>
      <td>(None, 128, 128, 32)</td>
      <td>0</td>
      <td>['conv2d_transpose_3[0][0]', 'conv2d_1[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_16 (Conv2D)</td>
      <td>(None, 128, 128, 16)</td>
      <td>4624</td>
      <td>['concatenate_3[0][0]']</td>
    </tr>
    <tr>
      <td>dropout_8 (Dropout)</td>
      <td>(None, 128, 128, 16)</td>
      <td>0</td>
      <td>['conv2d_16[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_17 (Conv2D)</td>
      <td>(None, 128, 128, 16)</td>
      <td>2320</td>
      <td>['dropout_8[0][0]']</td>
    </tr>
    <tr>
      <td>conv2d_18 (Conv2D)</td>
      <td>(None, 128, 128, 1)</td>
      <td>17</td>
      <td>['conv2d_17[0][0]']</td>
    </tr>
  </tbody>
</table>

  );
}

export default UnetModelSummary;