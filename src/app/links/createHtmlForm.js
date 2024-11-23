import { Alert, Button, Label, TextInput } from 'flowbite-react';
//  blank form page;

export default function LinksCreateHtmlForm () {
     
    return <>
    
         <form action="/api/links" method="POST" className="flex flex-col max-w-md gap-4" >
         
         {/* <>
         <div>
                <TextInput
                    id="url"
                    defaultValue={"https://github.com/DouglasJCH"}
                    placeholder="Your url to shorten"
                    required
                    name="url"
                    type="text"
                />
                <Label
                    htmlFor="url"
                    value="Enter a link to shorten"
                />
        </div>     


            <div className="block mb-2">
            
            </div> */}

       
        <Button type="submit">
            Shorten
        </Button>

        </form>
               
    </>

}
