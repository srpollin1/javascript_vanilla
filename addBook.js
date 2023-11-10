const book = {
    id: 1,
    title: 'Harry Potter',
    description: 'Lorem ipsum dolor sit amet consectetur',
    autor: 'J.K. Rowling',
    price: 100,
}

const discount = {
    discount: true,
    discountPrice: 50
}

const bookWithDiscount = {
    ...book,
    ...discount
};