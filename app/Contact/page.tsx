"use client";

const ContactPage = (): JSX.Element => {
  return (
    <div className="w-screen px-6">
      <h3 className="text-5xl my-2 bg-gradient-to-r from-purple-600 to-purple-400 inline-block text-transparent bg-clip-text">Contact</h3>
      <form action="/" method="post" className="max-w-xl mx-auto p-6 rounded-md shadow-xl flex flex-col" onSubmit={(e) => {e.preventDefault(); e.stopPropagation();}}>
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-900 block mb-1">Name:</label>
          <input type="text" id="name" name="name" placeholder="...Name" className="border rounded-md px-2 py-1 w-full"/>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-900 block mb-1">Email:</label>
          <input type="text" id="mail" name="mail" placeholder="...Email" className="border rounded-md px-2 py-1 w-full"/>
        </div>
        <div className="mb-5">
          <label htmlFor="content" className="text-gray-900 block mb-1">Content:</label>
          <textarea name="content" id="content" placeholder="...Content" className="border rounded-md px-2 py-1 w-full block" rows={6}></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-purple-600 to-purple-400 inline-block text-white font-bold rounded-md px-4 py-1 tracking-wide max-w-[90px] self-end">submit</button>
      </form>
    </div>
  )
}

export default ContactPage;