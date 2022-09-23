const { openBrowser, goto, textBox, into, write, toLeftOf, click, above, closeBrowser } = require('taiko');
(async () => {
    try {
	;
	openBrowser;
        await openBrowser();
	;
        await goto("https://turbo.az");
        let kanan = await $("//div[@data-id='q_make']").exists();
        if(kanan){
            await click($("//div[@data-id='q_make']"));
        }
        else{
            console.log("error");
        } 
        await write("hyu"), into(textBox({class:"tz-dropdown__search"}));
        await click($("//div[@data-val='1']"));
        await click($("//div[@data-id='q_model']"));
        await write("ge"), into(textBox({'data-id':"q_model"}));

        await click($("//div[@data-val='3443']"));
        await click(button({"name":'commit'}));
        await click(link({href:'/autos/6660548-hyundai-genesis-coupe'}));

        //await console.log($("//link[@class='phone']")).text();
        //let g = await $("//a[@class='phone']").exists();
        let elements = await $("//a[@class='phone']").elements();
        let attributePromises = elements.map(e => {
        return evaluate(e, elem => {return elem.getAttribute('href');});
        });
        console.log(await Promise.all(attributePromises));







        // await click(link({href:'/az/category/siyaset/all'}));
        // await click(link({href:'/az/category/siyaset/xarici-siyaset'}));
        // await click({x : 0, y : 0});
        // await scrollDown(1000)
        // await click(image({src:"https://api.qazet.az/uploads/1474f612-4d17-4559-b81a-881b9ecbcadc.jpeg"}))
	// ;
	;
	;
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
