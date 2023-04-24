import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UniversityName: string;
  readonly UniversityRating: number;
  readonly DormName: string;
  readonly DormRating: number;
  readonly RoomNumber: string;
  readonly RoomRating: number;
  readonly Rating?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly UniversityName: string;
  readonly UniversityRating: number;
  readonly DormName: string;
  readonly DormRating: number;
  readonly RoomNumber: string;
  readonly RoomRating: number;
  readonly Rating?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}