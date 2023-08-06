import { FollowingButtonComponent } from 'features/following/button';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addCharacterToFollowingList,
  removeCharacterToFollowingList
} from 'features/following/following.slices';

interface CardActionsProps {
  id: number;
}

const CardActions = ({ id }: CardActionsProps): JSX.Element => {
  const followingIds = useAppSelector((state) => state.following.followingIds);
  const dispatch = useAppDispatch();

  const onToggleFavorite = (id: number, setFav: boolean) => {
    if (setFav) {
      dispatch(addCharacterToFollowingList(id));
    } else {
      dispatch(removeCharacterToFollowingList(id));
    }
  };
  return (
    <FollowingButtonComponent
      isFav={followingIds.indexOf(id) >= 0}
      onToggleFavorite={(setFav) => onToggleFavorite(id, setFav)}
    />
  );
};
export default CardActions;
