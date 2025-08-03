        let cgst=document.querySelector(".cgst");
        let sgst=document.querySelector(".sgst");
        let charge=document.querySelector(".charge");
        let grandTotal=document.querySelector(".grandtotal");
        let productPrice=document.querySelectorAll(".price");
        let totalAmount=document.querySelector(".total");
        let order=document.querySelector(".order");
        function gst()
        {
            let gst=0;
                gst +=Number(totalAmount.innerText)*2.5/100;
            cgst.innerText=gst;
            sgst.innerText=gst;
        }
        function fee()
        {
            charge.innerText=Number(totalAmount.innerText)*1/100;
        }
        function total()
        {
            let sum=0;
            productPrice.forEach((amount)=>{
                sum +=Number(amount.innerText);
            })
            totalAmount.innerText=sum-sum*10/100;
        }
         function grand()
        {
         grandTotal.innerText=Number(cgst.innerText)+Number(sgst.innerText)+Number(totalAmount.innerText)+Number(charge.innerText);
         return Number(grandTotal.innerText);
        }
        let main=document.querySelectorAll(".main");
        main.forEach((box)=>{
            let plus=box.querySelector(".plus");
            let show=box.querySelector(".show");
            let minus=box.querySelector(".minus");
            let price=box.parentElement.querySelector(".price");
            let defaultPrice=price.innerText;
            let count=1;
            plus.addEventListener("click",()=>{
                show.innerText=++count;
                price.innerText=defaultPrice*count;
                total();
                gst();
                fee();
                grand();
            })
            minus.addEventListener("click",()=>{
                if(count<=1)
                {
                alert("Please enter atleast one quantity")
                return;
                }
                show.innerText=--count;
                price.innerText=defaultPrice*count;
                total();
                gst();
                fee();
                grand();
            })
        })
        order.addEventListener("click",()=>{
            let amount=grand();
            let store=`html/main.html?topay=${amount}`;
            window.open(store,"_self")
        })