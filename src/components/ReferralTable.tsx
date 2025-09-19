import React from "react";
import {
  cancelEdit,
  editReferral,
  onReferralChange,
  type Referral,
} from "../store/slice/ReferralsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faSave,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
import Input from "./common/Input";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { deleteReferral, updateReferral } from "../store/thunk/ReferralsThunk";

interface ReferralTableProps {
  referrals: Referral[];
  thead: string[];
}

const ReferralTableRow: React.FC<{ referral: Referral }> = ({ referral }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { referral: editedReferral } = useSelector(
    (state: RootState) => state.referrals
  );
  const [isEdit, setIsEdit] = React.useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
    dispatch(editReferral(referral));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(onReferralChange({ name: name as keyof Referral, value }));
  };

  const handleCancelClick = () => {
    setIsEdit(false);
    dispatch(cancelEdit());
  };

  const handleSaveClick = async () => {
    await dispatch(updateReferral(editedReferral as Referral));
    setIsEdit(false);
  };

  const handleDeleteClick = async () => {
    await dispatch(deleteReferral(referral.id));
  }

  return (
    <tr key={referral.id}>
      <td>
        {isEdit ? (
          <Input
            name="firstName"
            value={editedReferral?.firstName}
            onChange={handleInputChange}
          />
        ) : (
          referral.firstName
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            name="surname"
            value={editedReferral?.surname}
            onChange={handleInputChange}
          />
        ) : (
          referral.surname
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            name="email"
            value={editedReferral?.email}
            onChange={handleInputChange}
          />
        ) : (
          referral.email
        )}
      </td>
      <td>
        {isEdit ? (
          <Input
            name="phone"
            value={editedReferral?.phone}
            onChange={handleInputChange}
          />
        ) : (
          referral.phone
        )}
      </td>
      <td>
        {!isEdit ? (
          <>
            <button onClick={handleEditClick} title="Edit">
              <FontAwesomeIcon icon={faPen} color="#c0c0c0" />
            </button>
            <button title="Delete" onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrash} color="#c0c0c0" />
            </button>
          </>
        ) : (
          <>
            <button className="btn-info" title="Save" onClick={handleSaveClick}>
              <FontAwesomeIcon icon={faSave} color="#c0c0c0" />
            </button>
            <button
              className="btn-danger"
              title="Cancel"
              onClick={handleCancelClick}
            >
              <FontAwesomeIcon icon={faBan} color="#c0c0c0" />
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

const ReferralTable: React.FC<ReferralTableProps> = ({ referrals, thead }) => {
  return (
    <table className="referral-table">
      <thead>
        <tr>
          {thead.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {referrals.map((referral) => (
          <ReferralTableRow key={referral.id} referral={referral} />
        ))}
      </tbody>
    </table>
  );
};

export default ReferralTable;
