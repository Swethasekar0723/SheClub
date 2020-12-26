import { LightningElement,api} from 'lwc';
import Hero_Image1 from '@salesforce/resourceUrl/Sheclub';
import Hero_Image2 from '@salesforce/resourceUrl/Sheclubcaro1';
import Hero_Image3 from '@salesforce/resourceUrl/Sheclubcaro2';
import She_Club from '@salesforce/resourceUrl/SheClubLogo';
import Article from '@salesforce/resourceUrl/Article1';
import ArticleLogo from '@salesforce/resourceUrl/Article2';
import ArticleLogo1 from '@salesforce/resourceUrl/Article3';
import Kalpana from '@salesforce/resourceUrl/Kalpanachawla';
import Motherterasa from '@salesforce/resourceUrl/Motherteresa';
import kiran from '@salesforce/resourceUrl/pp';


export default class HomePage extends LightningElement {

    Image1 = Kalpana + '?Kalpana.png';  
    Image1= Kalpana + '?';
    Image2 = Motherterasa + '?Motherterasa.png';  
    Image2= Motherterasa + '?';
    Image3 = kiran + '?kiran.png';  
    Image3= kiran + '?';
    Carocial = Hero_Image1 + '?Hero_Image1.png';  
     Carocial= Hero_Image1 + '?';
     Carocial2 = Hero_Image2 + '?Hero_Image2.png';  
     Carocial2= Hero_Image2 + '?';
     Carocial3 = Hero_Image3 + '?Hero_Image3.png';  
     Carocial3= Hero_Image3 + '?';
     SheclubLogo =  She_Club + '? She_Club.png';  
     SheclubLogo=  She_Club + '?';
     ArticleImage1 = Article + '?Article.png';  
     ArticleImage1= Article + '?';
     ArticleImage2 = ArticleLogo + '?ArticleLogo.png';  
     ArticleImage2= ArticleLogo + '?';
     ArticleImage3 = ArticleLogo1 + '?ArticleLogo.png';  
     ArticleImage3= ArticleLogo1 + '?';
     @api recordId;
     handleSubmit(event) {
         console.log('onsubmit event recordEditForm'+ event.detail.fields);
     }
     handleSuccess(event) {
         console.log('onsuccess event recordEditForm', event.detail.id);
     }
//    handleClick(n){
//         clearInterval(myTimer);
//         if (n < 0){
//           showSlides(slideIndex -= 1);
//         } else {
//          showSlides(slideIndex += 1); 
//         }
//         if (n === -1){
//           myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//         } else {
//           myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//         }
//       }
   
}