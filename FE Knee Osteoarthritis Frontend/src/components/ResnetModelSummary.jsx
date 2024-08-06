import React from "react";

function ResnetModelSummary() {
  return (
    <table class="model-summary">
  <tr>
    <th>Layer (type)</th>
    <th>Output Shape</th>
    <th>Param #</th>
  </tr>
  <tr>
    <td>resnet50 (Functional)</td>
    <td>(None, 7, 7, 2048)</td>
    <td>23587712</td>
  </tr>
  <tr>
    <td>global_average_pooling2d (GlobalAveragePooling2D)</td>
    <td>(None, 2048)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>dropout (Dropout)</td>
    <td>(None, 2048)</td>
    <td>0</td>
  </tr>
  <tr>
    <td>dense (Dense)</td>
    <td>(None, 5)</td>
    <td>10245</td>
  </tr>
  <tr>
    <td colspan="2">Total params:</td>
    <td>23597957 (90.02 MB)</td>
  </tr>
  <tr>
    <td colspan="2">Trainable params:</td>
    <td>23544837 (89.82 MB)</td>
  </tr>
  <tr>
    <td colspan="2">Non-trainable params:</td>
    <td>53120 (207.50 KB)</td>
  </tr>
</table>
  );
}

export default ResnetModelSummary;