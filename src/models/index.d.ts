import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly author: string;
  readonly review: string;
  readonly roomID: string;
  readonly universityID: string;
  readonly dormID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReview = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Review, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly author: string;
  readonly review: string;
  readonly roomID: string;
  readonly universityID: string;
  readonly dormID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Review = LazyLoading extends LazyLoadingDisabled ? EagerReview : LazyReview

export declare const Review: (new (init: ModelInit<Review>) => Review) & {
  copyOf(source: Review, mutator: (draft: MutableModel<Review>) => MutableModel<Review> | void): Review;
}

type EagerRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly RoomNumber: string;
  readonly dormID: string;
  readonly universityID: string;
  readonly Reviews?: (Review | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Room, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly RoomNumber: string;
  readonly dormID: string;
  readonly universityID: string;
  readonly Reviews: AsyncCollection<Review>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Room = LazyLoading extends LazyLoadingDisabled ? EagerRoom : LazyRoom

export declare const Room: (new (init: ModelInit<Room>) => Room) & {
  copyOf(source: Room, mutator: (draft: MutableModel<Room>) => MutableModel<Room> | void): Room;
}

type EagerDorm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dorm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DormName: string;
  readonly Rooms?: (Room | null)[] | null;
  readonly universityID: string;
  readonly Reviews?: (Review | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDorm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dorm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DormName: string;
  readonly Rooms: AsyncCollection<Room>;
  readonly universityID: string;
  readonly Reviews: AsyncCollection<Review>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dorm = LazyLoading extends LazyLoadingDisabled ? EagerDorm : LazyDorm

export declare const Dorm: (new (init: ModelInit<Dorm>) => Dorm) & {
  copyOf(source: Dorm, mutator: (draft: MutableModel<Dorm>) => MutableModel<Dorm> | void): Dorm;
}

type EagerUniversity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<University, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UniversityName: string;
  readonly Dorms?: (Dorm | null)[] | null;
  readonly Rooms?: (Room | null)[] | null;
  readonly Reviews?: (Review | null)[] | null;
  readonly city: string;
  readonly state: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUniversity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<University, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UniversityName: string;
  readonly Dorms: AsyncCollection<Dorm>;
  readonly Rooms: AsyncCollection<Room>;
  readonly Reviews: AsyncCollection<Review>;
  readonly city: string;
  readonly state: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type University = LazyLoading extends LazyLoadingDisabled ? EagerUniversity : LazyUniversity

export declare const University: (new (init: ModelInit<University>) => University) & {
  copyOf(source: University, mutator: (draft: MutableModel<University>) => MutableModel<University> | void): University;
}