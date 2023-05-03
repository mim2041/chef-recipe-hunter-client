import { Accordion } from 'flowbite-react';
import React from 'react';

const FAQ = () => {
    return (
        <div className='my-12 text-left'>
            <h2 className='my-5 text-4xl font-bold text-violet-700 text-center'>People frequently asks these questions</h2>
            <p className='text-lg w-2/3 mb-5 text-center mx-auto'>People who visit our website frequently asks some repeated questions. To provide you with the questions on your mind and answer them we have shown it to you.</p>
           <Accordion collapseAll={true}>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-violet-700'>
                Where can I get traditional Bengali Food?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 text-lg">
                If you're looking for traditional Bengali food, there are several places where you can find it:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                    <ol type="1">
                        <li><span className='font-bold mt-2'>Bengali restaurants:</span> There are many restaurants in Bangladesh, India, and other parts of the world that serve traditional Bengali cuisine. Some popular Bengali dishes you might find at these restaurants include biryani, fish curry, dal, and chutney.</li>
                        <li><span className='font-bold mt-2'>Street food stalls:</span> Bengali street food is famous for its delicious flavors and variety. You can find street food stalls in many cities and towns in Bangladesh, serving snacks and dishes like fuchka, jhalmuri, and chotpoti.</li>
                        <li><span className='font-bold mt-2'>Bengali homes:</span> If you have friends or family who are Bengali, you may be able to try traditional Bengali food in their homes. Bengali cuisine is often prepared and enjoyed in family settings, and many Bengali households have their own secret recipes and cooking techniques.</li>
                        <li><span className='font-bold mt-3'>Online food delivery services:</span> In some cities, there are online food delivery services that specialize in Bengali cuisine. You can order traditional Bengali dishes like biryani, fish curry, and dal from these services and have them delivered to your doorstep.

</li>
                    </ol>
                </p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-violet-700'>
                How will I register in this website?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Just click on login button shown on header. Then click on create an account. You will be redirected to the registration page of our website. Then you can provide your email and password or you can login with your google or github account.
                </p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-violet-700'>
                What are the differences between Bengali cuisine with others?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    
                    Bengali cuisine is known for its unique flavors, diverse ingredients, and distinctive cooking techniques. 
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Use of mustard oil: Mustard oil is a staple ingredient in Bengali cuisine, and is used in many dishes for its unique flavor and health benefits. In contrast, other cuisines often use vegetable oil, olive oil, or other types of oil.

                Love for fish: Bengalis are known for their love of fish, and many traditional Bengali dishes are centered around fish as the main ingredient. Fish is often prepared in a variety of ways, including curries, fries, and stews.

                Variety of vegetarian dishes: While Bengalis do enjoy meat and fish dishes, vegetarian cuisine is also an important part of Bengali cuisine. Many traditional Bengali dishes are vegetarian, and use a wide variety of vegetables, lentils, and legumes.

                Use of spices and herbs: Bengali cuisine is known for its use of spices and herbs, including cumin, coriander, turmeric, ginger, and garlic. Many dishes are also flavored with fresh herbs like cilantro and mint.
                </p>
                
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQ;