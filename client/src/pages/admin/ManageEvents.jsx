import React, { useEffect, useState } from 'react'
import Title from '../../components/admin/Title'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

function ManageEvents() {

  const { events, axios, fetchEvents } = useContext(AppContext)

  const [allEvents, setEvents] = useState([])

  const fetchAllEvents = async () => {
    setEvents(events)
  }

  const changeEventStatus = async (e, id) => {
    e.preventDefault()
    const newStatus = e.target.value
    try {
      const { data } = await axios.post('/api/event/toggle-status', { id, newStatus })

      if (data.success) {
        toast.success(data.message)
        fetchEvents()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;
    
    try {
      const { data } = await axios.post('/api/event/delete-event', { id })
      if (data.success) {
        toast.success(data.message)
        fetchEvents()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllEvents()
  }, [events])

  return (
    <div className='px-4 pt-10 pb-10 md:px-10 w-full'>

      <Title title="Manage Events" subTitle="Delete or change the status of the event." />

      <div className='max-w-4xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Name</th>
              <th className='p-3 font-medium max-md:hidden'>Date</th>
              <th className='p-3 font-medium max-md:hidden'>Venue</th>
              <th className='p-3 font-medium'>Actions</th>
              <th className='p-3 font-medium max-sm:hidden'>Status</th>
              <th className='p-3 font-medium'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allEvents.map((event, index) => (
              <tr key={index} className='border-t border-borderColor text-gray-500'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={event.image} alt="" className='h-12 w-12 aspect-square rounded-md object-cover' />
                  <p className='font-medium max-md:hidden'>{event.name}</p>
                </td>

                <td className='p-3 max-md:hidden'>
                  {event.date}
                </td>

                <td className='p-3 max-md:hidden'>{event.venue}</td>

                <td className='p-3'>
                  <select onChange={e => changeEventStatus(e, event._id)} value={event.status} className='px-2 max-sm:px-0 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'>
                    <option value="Completed">Completed</option>
                    <option value="Upcoming">Upcoming</option>
                  </select>
                </td>

                <td className='p-3'>
                  <span className={`px-3 max-md:hidden py-1 rounded-full text-xs font-semibold ${event.status === 'Upcoming' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>{event.status}</span>
                </td>

                <td className='p-3 max-sm:p-0'>
                  <img src={assets.cross_icon} onClick={() => deleteEvent(event._id)} alt='' className='w-8 hover:scale-110 transition-all cursor-pointer  max-sm:mr-300' />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManageEvents
