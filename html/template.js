const ram = "8GB";
const cpu = "core i5";
const ssd = "512GB";
const size = 15.3;  

html = `
    <ul>
    <li>Ram: ${ram}</li>
    <li>CPU: ${cpu} </li>
    <li>ssd: ${ssd}</li>
    <li>size: ${size}</li>
    <li>${fun()}</li>
    
    </ul>

`;

function fun(){
    return 'hi';
}

const product = 'حاسوب';
const price = 1000;
const discount = 0.1;

const finalPrice = price - (price * discount);

const message = `
    تفاصيل المنتج:
    - الاسم: ${product}
    - السعر: ${price}
    - الخصم: ${discount * 100}%
    - السعر النهائي: ${finalPrice.toFixed(2)}
`;

console.log(message);

document.body.innerHTML = html;

