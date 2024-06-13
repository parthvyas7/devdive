import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function run() {
  try {

    const database = client.db("devdive");
    const posts = database.collection("posts");

    // const dummyPosts = [
    //   {
    //     _id: ObjectId('666932850d84171b3d448a48'),
    //     title: 'quis est ea et consectetur Lorem et',
    //     topics: [ 'aute' ],
    //     content: 'pariatur ea reprehenderit minim fugiat ea enim veniam adipisicing ad aliquip eu amet duis reprehenderit Lorem aliquip ipsum elit non sit aute veniam duis officia adipisicing magna dolor amet consequat aliquip laborum nulla in incididunt id elit consequat consectetur culpa id ullamco aliquip sint nostrud nisi ipsum proident commodo irure',
    //     appreciation: 231,
    //     comments: [
    //       {
    //         writtenBy: 'Stacie Reyes',
    //         when: 'October 18, 1988',
    //         body: 'reprehenderit cillum do esse id'
    //       }
    //     ],
    //     datePublished: 'November 28, 1992',
    //     author: 'Kristy Cummings'
    //   },
    //   {
    //     _id: ObjectId('666932850d84171b3d448a49'),
    //     title: 'proident incididunt ullamco voluptate aliqua veniam sunt',
    //     topics: [ 'veniam' ],
    //     content: 'proident mollit deserunt Lorem veniam nostrud cupidatat officia cupidatat do voluptate tempor irure aliqua duis sunt aliqua veniam aliquip nisi eiusmod occaecat sunt cillum consequat elit nulla ea eiusmod minim consequat laboris eiusmod et quis exercitation culpa laborum consequat do velit consequat sit ullamco ex ea pariatur commodo cupidatat nisi',
    //     appreciation: 12,
    //     comments: [
    //       {
    //         writtenBy: 'Marisol Hodges',
    //         when: 'June 1, 1978',
    //         body: 'incididunt commodo eiusmod labore dolore'
    //       }
    //     ],
    //     datePublished: 'August 4, 1998',
    //     author: 'Hancock Hunter'
    //   },
    //   {
    //     _id: ObjectId('666932850d84171b3d448a4a'),
    //     title: 'aute dolor sint consectetur qui et tempor',
    //     topics: [ 'eu' ],
    //     content: 'aute nulla velit velit proident proident dolor anim minim Lorem dolor cupidatat officia cillum amet sunt deserunt est mollit in sit ullamco quis velit commodo minim laboris do velit irure tempor id qui laboris id laboris sint enim commodo pariatur adipisicing elit anim nulla laborum esse aliqua mollit ipsum tempor',
    //     appreciation: 411,
    //     comments: [
    //       {
    //         writtenBy: 'Atkinson Rodriquez',
    //         when: 'August 25, 1983',
    //         body: 'id elit pariatur dolore ex'
    //       }
    //     ],
    //     datePublished: 'March 26, 1986',
    //     author: 'Reyes Eaton'
    //   },
    //   {
    //     _id: ObjectId('666932850d84171b3d448a4b'),
    //     title: 'do aute eiusmod magna mollit reprehenderit sunt',
    //     topics: [ 'nostrud' ],
    //     content: 'reprehenderit aute nisi aute est pariatur esse quis ullamco consequat eiusmod excepteur non nostrud magna ad excepteur velit qui excepteur exercitation ullamco consequat excepteur labore incididunt occaecat minim esse nisi anim aute do velit Lorem laborum esse excepteur commodo mollit do dolore exercitation incididunt laboris anim incididunt reprehenderit ut elit',
    //     appreciation: 940,
    //     comments: [
    //       {
    //         writtenBy: 'Smith Warner',
    //         when: 'May 16, 2023',
    //         body: 'consequat ut magna sit aliqua'
    //       }
    //     ],
    //     datePublished: 'February 15, 1993',
    //     author: 'Crystal Morrison'
    //   },
    //   {
    //     _id: ObjectId('666932850d84171b3d448a4c'),
    //     title: 'ex minim dolore ut Lorem est amet',
    //     topics: [ 'ipsum' ],
    //     content: 'enim sit ea sint consectetur elit eiusmod anim elit mollit nostrud nulla aliqua dolor eu deserunt dolore reprehenderit cupidatat aliquip sit non occaecat culpa non occaecat dolor enim et commodo culpa commodo quis Lorem incididunt aliquip deserunt excepteur voluptate velit elit in exercitation qui labore ex magna do culpa exercitation',
    //     appreciation: 644,
    //     comments: [
    //       {
    //         writtenBy: 'Jenny Hahn',
    //         when: 'June 4, 2015',
    //         body: 'est fugiat id esse tempor'
    //       }
    //     ],
    //     datePublished: 'June 17, 1986',
    //     author: 'Bender Walton'
    //   }
    // ]

    const allPosts = await posts.find({}).toArray();

    console.log(allPosts)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);
