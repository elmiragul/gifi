import { observable, computed, action, decorate } from 'mobx';
// import { autobind } from 'core-decorators';
// import { simpleFetch2 } from 'Components/utils';


class Store {
  
    inputValue = 'all';
    gifs=[];
    handleClick() {

        const url =`http://api.giphy.com/v1/gifs/search?api_key=uZFCYanydwNXlybU0Yh7Mf6nQNjQeYPO&q=${this.inputValue}&limit=12`;
        
        fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.gifs = data.data
                    })
                    .catch(error => console.error(error))
        // return simpleFetch2(url, {
        //     method: 'GET',
        //     // payload: result
        // })
        //     .then((res) => {
              
        //         this.isLoaded = true
        //         this.vendors = res.data;
        //         this.vendorsCount = res.pagination.total_count;
        //     })
        //     .catch((err) => {

        //         console.log(err);
        //     });
    }

    setInputValue(value) {

         this.inputValue = value;
    }
 
    

//     get calculation() {
//       return this.sum=this.sum + this.symbol
//    }
}

const store = decorate(Store, {
   
    inputValue: observable,
    gifs: observable,
    handleClick: action,
    setInputValue:action,
   
})


export default new store();