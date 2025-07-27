import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/admin/Title'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

function ManageContent() {

  const { allContent, fetchContent, axios } = useContext(AppContext)

  const [content, setAllContent] = useState([])

  const deleteContent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post('/api/content/delete-content', { id })
      if (data.success) {
        toast.success(data.message)
        fetchContent()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    setAllContent(allContent);
  }, [allContent]);

  return (
    <div className='px-4 pt-10 pb-10 md:px-10 w-full'>

      <Title title="Manage Posts" subTitle="View all listed posts and delete the one you want." />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Title</th>
              <th className='p-3 font-medium'>Category</th>
              <th className='p-3 font-medium max-md:hidden'>Date</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map((content, index) => (
              <tr key={index} className='border-t border-borderColor'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={content.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{content.title}</p>
                  </div>
                </td>

                <td className='p-3'>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${content.type === 'Blog'
                    ? 'bg-green-100 text-green-500'
                    : content.type === 'Video'
                      ? 'bg-red-100 text-red-500'
                      : 'bg-purple-100 text-purple-500'
                    }`}>
                    {content.type}
                  </span>
                </td>

                <td className='p-3 max-md:hidden'>{content.date}</td>

                <td className='flex items-center p-3'>
                  <img onClick={() => deleteContent(content._id)} src={assets.delete_icon} alt="" className='cursor-pointer' />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManageContent
