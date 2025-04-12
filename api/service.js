import shippImage from "../public/svg/shipp.svg";
import returnImage from "../public/svg/return.svg";
import supportImage from "../public/svg/support.svg";
import paymentImage from "../public/svg/payment.svg"

const serviceData = [
    {
        id: 1,
        image: shippImage,
        title: "Free shipping",
        text: "Free shipping on all order"
    },
    {
        id: 2,
        image: returnImage,
        title: "Return Guarantee",
        text: "30 days refund"
    },
    {
        id: 3,
        image: supportImage,
        title: "24/7 online support",
        text: "24/7 technical support"
    },
    {
        id: 4,
        image: paymentImage,
        title: "Secure Payment",
        text: "All payment methods accepted"
    }
]

export { serviceData }