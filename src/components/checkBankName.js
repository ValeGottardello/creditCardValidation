export default function CheckBankName(cardNum) {

    const cardData = [
        { name: "AMEX", validNum: [34,37] },
        { name: "Discover", validNum: [6011] },
        { name: "MasterCard", validNum:[ 50,51,52,53,54,55] },
        { name: "Visa", validNum: [4] },
    ]


    const bankName = cardData.find(object => object.validNum.includes(Number(cardNum)))

    return bankName ? bankName : "Invalid Card Number"

}