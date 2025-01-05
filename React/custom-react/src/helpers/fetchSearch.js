const fetchSearch = async ({ queryKey }) => {
    // console.log('query key', queryKey)
    const {animal , location , breed} = queryKey[1];
    console.log('query key', animal , location , breed)
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }
    return apiRes.json();
}
export default fetchSearch;