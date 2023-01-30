<h2>CSS-in-Js performance testing</h2>

The data presents a comparison of the performance of three CSS-in-JS libraries: Styled Components, Emotion, and Antd (cssInJS). The performance is measured in two ways: the percentage of components that are successfully rendered and the total blocking time.

In terms of the percentage of components that are successfully rendered, the results are similar for the three libraries. As the number of components increases, the performance decreases for all three libraries. However, Styled Components and Emotion have a relatively higher performance compared to Antd cssInJS, especially at lower component numbers. For example, when the number of components is 10, Styled Components and Emotion have a performance of 97% and 96% respectively, while Antd cssInJS has a performance of only 90%.

In terms of total blocking time, the results show a clear difference between the three libraries. As the number of components increases, the total blocking time of Styled Components and Emotion increases at a slower pace compared to Antd cssInJS. For example, when the number of components is 200, the total blocking time of Styled Components is 350, Emotion is 450, while Antd cssInJS is 2450. This suggests that Styled Components and Emotion might be more suitable options for projects that require low total blocking time.

The total blocking time of Styled Components and Emotion also increases with increasing component numbers, but not as dramatically as Antd cssInJS. At the highest number of components (5000), the total blocking time of Styled Components is 4540, Emotion is 5500, while Antd cssInJS's total blocking time is not possible to calculate.

The data suggests that for projects with a relatively low number of components, Styled Components and Emotion could be more suitable options for performance-critical applications, while Antd cssInJS might not be the best choice, especially if low total blocking time is a requirement.

![Performance testing](https://user-images.githubusercontent.com/66440787/215357774-02ae2b99-28cb-4efe-a0d4-cf073fd7dde0.png)





