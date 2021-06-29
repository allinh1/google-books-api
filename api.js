
export const getBooks = async (search) => {
    const responsePromise = fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    const response = await responsePromise;
    console.log(response);
    const booksData = await response.json()

    console.log(booksData);
    console.log(booksData.items)
    return booksData.items;

}
getBooks()


// GET https://www.googleapis.com/books/v1/volumes?q=quilting

