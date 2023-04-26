// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Review, Room, Dorm, University } = initSchema(schema);

export {
  Review,
  Room,
  Dorm,
  University
};