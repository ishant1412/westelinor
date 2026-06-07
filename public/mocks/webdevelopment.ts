import wd1 from "@/public/exc_web_development/wd1.png"
import wd2 from "@/public/exc_web_development/wd2.png"
import wd3 from "@/public/exc_web_development/wd3.png"
import wd4 from "@/public/exc_web_development/wd4.png"
import wd5 from "@/public/exc_web_development/wd5.png"
import { StaticImageData } from "next/image"
type listtype={
    img:StaticImageData,
    subtitle:string,
    text:string,
}
const web_development:listtype[]=[
  
  {
    "img": wd1,
    "text": "Our enterprise web applications are custom-built to address the unique challenges of specific user groups, including departments and project teams. These applications are designed to streamline workflows, enhance coordination among staff, and improve overall productivity. They function as advanced online versions of traditional desktop applications, facilitating seamless data sharing and remote access. At West Elinor, we emphasize balancing cost-effectiveness with high-quality performance. Our web development services ensure that your enterprise applications are developed, maintained, and managed within optimal costs and timeframes, providing secure, risk-free, and efficient business environments.",
    "subtitle": "Enterprise Web Applications"
  },
  {
    "img": wd2,
    "text": "West Elinor specializes in creating web solutions that significantly alter and improve business workflows. Our business automation applications are designed to automate routine tasks, allowing employees to focus on more strategic, less tedious activities. These applications seamlessly integrate with your existing IT infrastructure, enhancing productivity, streamlining processes, and reducing reliance on manual efforts. Our innovative automation solutions are customized to augment your existing business processes effectively. It's time you learned about the transformative impact of our automation applications and took your business efficiency to new heights.",
    "subtitle": "Business Automation Application"
  },
  {
    "img": wd3,
    "text": "Our comprehensive eCommerce web application services cater to a diverse range of online retail needs, including all kinds of e-shops, B2B, B2C, and various booking systems. West Elinor's custom eCommerce development is grounded in a deep understanding of business strategy and the latext development technologies. Our e-commerce web designs are not only highly functional but also simple to navigate, ensuring that your customers have an enjoyable and effortless shopping experience. Our team of experienced web developers is proficient in using advanced technologies like BigCommerce, Drupal, Joomla, Magento, Shopify, WordPress, Zen Cart, PHP, and more. We have a proven track record of delivering captivating online experiences that maximize customer engagement and conversions.",
    "subtitle": "eCommerce Web Application"
  },
  {
    "img": wd4,
    "text": "Effective CMS website development is central to our web services at West Elinor. We provide scalable solutions that allow for creative freedom in design, using advanced CMS development techniques. Our CMS solutions are not just about ease of use; they also focus on aesthetic appeal. With West Elinor's CMS development services, you get the best of both worlds: an intuitive user interface and a visually appealing design. Our CMS platforms enable quick content updates, design alterations through templates, and a structured hierarchy of user roles. We specialize in developing outstanding CMS websites using platforms like WordPress, Joomla, Serendipity, and Drupal. Our approach is aimed at saving your time and money while eliminating frustrations commonly associated with content management. If you are seeking unparalleled CMS website development services, look no further than the extensive expertise of West Elinor.",
    "subtitle": "CMS Web Solutions"
  },
  {
    "img": wd5,
    "text": "West Elinor aims to accelerate your business productivity as well as profitability, which help organizations flourish in today's fast pacing world. Our team has versatile experience and prodigious skills in the area of software development. We create digital solutions for international corporations, small businesses and many other organizations. Today, we have clients drawn from United States, United Kingdom, Canada, Australia, Germany, Singapore and India, representing various industrial verticals.",
    "subtitle": "WHY US ?"
  }
]
export default web_development