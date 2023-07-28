// const Event = require("../../models/event");
// const User = require("../../models/user");
// const bcrypt = require("bcryptjs");
// const Booking = require("../../models/booking");

const authResolver = require('./auth');
const bookResolver = require('./booking');
const eventResolver = require('./event')

// const user = async (userId) => {
//   try {
//     const user = await User.findById(userId);
//     return {
//       ...user._doc,
//       _id: user.id,
//       createdEvents: events.bind(this, user._doc.createdEvents),
//     };
//   } catch (err) {
//     throw err;
//   }
// };

// const events = async (eventIds) => {
//   try {
//     const events = await Event.find({ _id: { $in: eventIds } });
//    return events.map((event) => {
//       return {
//         ...event._doc,
//         _id: event.id,
//         date: new Date(event._doc.date).toISOString(),
//         creator: user.bind(this, event.creator),
//       };
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// const singleEvent = async (eventId) => {
//   try {
//     const event = await Event.findById(eventId);
//     return {
//       ...event._doc,
//       id: event.id,
//       creator: user.bind(this, event.creator),
//     };
//   } catch (err) {
//     throw err;
//   }
// };

// const resolvers = {
//   // events: async () => {
//   //   try {
//   //     const events = await Event.find();
//   //     return events.map((event) => {
//   //       return {
//   //         ...event._doc,
//   //         _id: event.id,
//   //         date: new Date(event._doc.date).toISOString(),
//   //         creator: user.bind(this, event._doc.creator),
//   //       };
//   //     });
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
//   // bookings: async () => {
//   //   try {
//   //     const bookings = await Booking.find();
//   //     return bookings.map((booking) => {
//   //       return {
//   //         ...booking._doc,
//   //         _id: booking.id,
//   //         user: user.bind(this, booking._doc.user),
//   //         event: singleEvent.bind(this, booking._doc.event),
//   //         createdAt: new Date(booking._doc.createdAt).toISOString(),
//   //         updatedAt: new Date(booking._doc.updatedAt).toISOString(),
//   //       };
//   //     });
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
//   // createEvent: async ({ eventInput }) => {
//   //   const event = new Event({
//   //     title: eventInput.title,
//   //     description: eventInput.description,
//   //     price: eventInput.price,
//   //     date: new Date(eventInput.date),
//   //     creator: "64c26c92aa9a4310f05039f1",
//   //   });
//   //   let createdEvent;
//   //   try {
//   //     const result = await event.save();
//   //     createdEvent = {
//   //       ...result._doc,
//   //       _id: result._doc._id.toString(),
//   //       date: new Date(event._doc.date).toISOString(),
//   //       creator: user.bind(this, result._doc.creator),
//   //     };
//   //     const creator = await User.findById("64c26c92aa9a4310f05039f1");

//   //     if (!creator) {
//   //       throw new Error("User not found.");
//   //     }
//   //     creator.createdEvents.push(event);
//   //     await creator.save();

//   //     return createdEvent;
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
//   // createUser: async ({ userInput }) => {
//   //   try {
//   //     const existingUser = await User.findOne({ email: userInput.email });
//   //     if (existingUser) {
//   //       throw new Error("User exists already.");
//   //     }
//   //     const hashedPassword = await bcrypt.hash(userInput.password, 12);

//   //     const user = new User({
//   //       email: userInput.email,
//   //       password: hashedPassword,
//   //     });

//   //     const result = await user.save();

//   //     return { ...result._doc, password: null, _id: result.id };
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
//   // bookEvent: async (args) => {
//   //   try {
//   //     const fetchEvent = await Event.findOne({ _id: args.eventId });
//   //     const booking = new Booking({
//   //       user: "64c26c92aa9a4310f05039f1",
//   //       event: fetchEvent,
//   //     });
//   //     const result = await booking.save();
//   //     return {
//   //       ...result._doc,
//   //       _id: result.id,
//   //       user: user.bind(this, booking._doc.user),
//   //       event: singleEvent.bind(this, booking._doc.event),
//   //       createdAt: new Date(result._doc.createdAt).toISOString(),
//   //       updatedAt: new Date(result._doc.updatedAt).toISOString(),
//   //     };
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
//   // cancelBooking: async (args) => {
//   //   try {
//   //     const booking = await Booking.findById(args.bookingId).populate("event");
//   //     const event = {
//   //       ...booking.event._doc,
//   //       _id: booking.event.id,
//   //       creator: user.bind(this, booking.event._doc.creator),
//   //     };
//   //     await Booking.deleteOne({ _id: args.bookingId });
//   //     return event;
//   //   } catch (err) {
//   //     throw err;
//   //   }
//   // },
// };

const resolvers = {
  ...authResolver,
  ...bookResolver,
  ...eventResolver
}


module.exports = resolvers;
