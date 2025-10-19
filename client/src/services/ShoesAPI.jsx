const getAllShoes = async () => {
    try{
        const res = await fetch('/api/items');
        const data = await res.json();
        return data;
    } catch(err){
        console.log('Error fetching data', err);
    }
}

const getShoeById = async (id) => {
    try{
        const res = await fetch(`/api/items/${id}`);
        const data = await res.json();
        return data;
    } catch(err) {
        console.log('Error fetchind data', err);
    }
}

const createShoe = async (data) => {
    const reqOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try{
        const res = await fetch('/api/items', reqOptions);
        const data = await res.json();
        console.log(data);
    } catch(err){
        console.log('Error creating shoe', err);
    }
}

const updateShoe = async (id, data) => {
    const reqOptions = {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    try{
        const res = await fetch(`/api/items/${id}`, reqOptions);
        const data = await res.json();
        console.log(data);
    } catch (err){
        console.log('Error updating shoe', err);
    }
}

const deleteShoe = async (id) => {
    const reqOptions = {method: `DELETE`};
    try{
        const res = await fetch(`/api/items/${id}`, reqOptions);
        if (res.ok) {
            console.log('Shoe deleted successfully');
        } else {
            console.log('Error deleting shoe', res.statusText);
        }
    } catch (err){
        console.log('Error deleting shoe', err);
    }
}

export default { getAllShoes, getShoeById, createShoe, updateShoe, deleteShoe };