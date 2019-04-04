const store = (funciton(){
    const addItem = function(item){
        this.pages.push(item);
    };
    const findById = function(id){
        return this.pages.find(item=>item.id===id);
    }
    const findAndDelete = function(id){
        this.pages=this.pages.filter(item=>item.id!==id);
    }
    const findAndUpdate = function(id,newDescrip){
        const page=this.findById(id);
        const newDescript={
            description : newDescrip
        }
        Object.assign(page,newDescript);
    };
    const createObj(url,id,name){
        return {
            url:url,
            name:name,
            rating:0,
            description:descript,
            showdescript:false,
            isEdit:false
        }
    }


    return {
        rating:0,
        descript:'',
        pages:[],
        addItem,
        findById,
        findAndDelete,
        findAndUpdate,
        createObj
    }
}());