import { motion } from 'framer-motion'
import { FiMessageCircle, FiThumbsUp, FiShare2, FiStar } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const Community = () => {
  const discussions = [
    {
      id: 1,
      author: 'Travel Enthusiast',
      authorImage: 'https://i.pravatar.cc/150?img=10',
      verified: true,
      title: 'Best Time to Visit Japan for Cherry Blossoms?',
      category: 'Travel Tips',
      excerpt: 'Planning my first trip to Japan and want to catch the cherry blossom season. Any recommendations on the best time and places?',
      replies: 24,
      likes: 89,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      author: 'Adventure Seeker',
      authorImage: 'https://i.pravatar.cc/150?img=11',
      verified: false,
      title: 'Solo Female Travel in Southeast Asia',
      category: 'Safety',
      excerpt: 'Looking for advice on safe destinations for solo female travelers in Southeast Asia. Share your experiences!',
      replies: 31,
      likes: 124,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      author: 'Budget Traveler',
      authorImage: 'https://i.pravatar.cc/150?img=12',
      verified: true,
      title: 'How I Traveled Europe on ₹50/Day',
      category: 'Budget Travel',
      excerpt: 'Just completed a 30-day Europe trip on a tight budget. Here are my tips and tricks for budget-conscious travelers.',
      replies: 67,
      likes: 234,
      timestamp: '1 day ago'
    },
    {
      id: 4,
      author: 'Photo Explorer',
      authorImage: 'https://i.pravatar.cc/150?img=13',
      verified: false,
      title: 'Most Instagram-Worthy Spots in Iceland',
      category: 'Photography',
      excerpt: 'Sharing my favorite photography locations from my recent Iceland trip. Absolutely stunning landscapes!',
      replies: 18,
      likes: 156,
      timestamp: '2 days ago'
    }
  ]

  const travelReviews = [
    {
      id: 1,
      user: 'John Smith',
      userImage: 'https://i.pravatar.cc/150?img=14',
      destination: 'Maldives Paradise Resort',
      rating: 5,
      review: 'Absolutely incredible experience! The overwater villa was stunning, staff was amazing, and the food was exceptional. Worth every penny!',
      date: '1 week ago',
      helpful: 45
    },
    {
      id: 2,
      user: 'Emily Johnson',
      userImage: 'https://i.pravatar.cc/150?img=15',
      destination: 'Swiss Alps Adventure',
      rating: 4.5,
      review: 'Beautiful scenery and well-organized tour. The train rides were spectacular. Only minor issue was the hotel wifi, but otherwise perfect!',
      date: '2 weeks ago',
      helpful: 32
    },
    {
      id: 3,
      user: 'David Lee',
      userImage: 'https://i.pravatar.cc/150?img=16',
      destination: 'Tokyo Culture Tour',
      rating: 5,
      review: 'Mind-blowing experience! The guide was knowledgeable, the itinerary was perfect, and we got to see both modern and traditional Tokyo.',
      date: '3 weeks ago',
      helpful: 58
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-pearl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-navy to-teal text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            Travel Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Connect with fellow travelers, share experiences, and get advice
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Create Post */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Start a Discussion</h3>
              <textarea
                placeholder="Share your travel questions or experiences..."
                rows="3"
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none resize-none mb-4"
              ></textarea>
              <div className="flex items-center justify-between">
                <select className="px-4 py-2 rounded-xl bg-white border-2 border-transparent focus:border-skyblue focus:outline-none">
                  <option>Select Category</option>
                  <option>Travel Tips</option>
                  <option>Destination Advice</option>
                  <option>Budget Travel</option>
                  <option>Safety</option>
                  <option>Photography</option>
                </select>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Post
                </motion.button>
              </div>
            </div>

            {/* Discussions */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Recent Discussions</h2>
              <div className="space-y-6">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <img 
                        src={discussion.authorImage} 
                        alt={discussion.author}
                        className="w-12 h-12 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-navy">{discussion.author}</span>
                          {discussion.verified && (
                            <MdVerified className="text-skyblue" />
                          )}
                          <span className="text-navy/60 text-sm">• {discussion.timestamp}</span>
                        </div>
                        
                        <div className="mb-2">
                          <span className="inline-block bg-teal/10 text-teal px-3 py-1 rounded-full text-xs font-medium">
                            {discussion.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-navy mb-2 hover:text-skyblue transition-colors">
                          {discussion.title}
                        </h3>
                        <p className="text-navy/70 mb-4">{discussion.excerpt}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-navy/60">
                          <button className="flex items-center space-x-1 hover:text-skyblue transition-colors">
                            <FiMessageCircle />
                            <span>{discussion.replies} replies</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-teal transition-colors">
                            <FiThumbsUp />
                            <span>{discussion.likes} likes</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-gold transition-colors">
                            <FiShare2 />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Community Stats */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Community Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-skyblue">15.2K</div>
                  <div className="text-navy/70 text-sm">Active Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-teal">8.5K</div>
                  <div className="text-navy/70 text-sm">Discussions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold">50+</div>
                  <div className="text-navy/70 text-sm">Countries</div>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {['#SoloTravel', '#BudgetTips', '#EuropeTrip', '#BeachDestinations', '#AdventureSports'].map((tag, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between w-full text-left hover:text-skyblue transition-colors"
                  >
                    <span className="text-navy font-medium">{tag}</span>
                    <span className="text-navy/60 text-sm">{Math.floor(Math.random() * 500)}+</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: 'Travel Pro', image: 'https://i.pravatar.cc/150?img=20', posts: 234 },
                  { name: 'World Explorer', image: 'https://i.pravatar.cc/150?img=21', posts: 189 },
                  { name: 'Adventure Guide', image: 'https://i.pravatar.cc/150?img=22', posts: 156 }
                ].map((user, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img 
                      src={user.image} 
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-navy text-sm">{user.name}</div>
                      <div className="text-navy/60 text-xs">{user.posts} posts</div>
                    </div>
                    <button className="text-skyblue text-sm font-medium hover:text-skyblue/80">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Recent Reviews</h2>
            <p className="text-navy/70 text-lg">See what our community is saying about their travels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={review.userImage} 
                    alt={review.user}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-navy">{review.user}</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i}
                          className={`${i < review.rating ? 'text-gold fill-gold' : 'text-navy/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-navy mb-2">{review.destination}</h4>
                <p className="text-navy/70 text-sm mb-4 leading-relaxed">{review.review}</p>
                
                <div className="flex items-center justify-between text-sm text-navy/60">
                  <span>{review.date}</span>
                  <button className="flex items-center space-x-1 hover:text-skyblue transition-colors">
                    <FiThumbsUp />
                    <span>{review.helpful} helpful</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Community
