interface ProfileModel {
  revoked: boolean;
  id: string;
  primerAccountList: any;
  sessionPrimerAccountId: string;
  firstName: string;
  lastName: string;
  email: string;
  accountRoles: string[];
  mfaEnabled: boolean;
  dashboardSettings: {
    preferredCurrency: string;
    snapshotLayout: any;
  };
  refundLimits: any;
  createdVia: string;
}

export const ProfileModelDefaults = {
  revoked: false,
  id: '',
  primerAccountList: [],
  sessionPrimerAccountId: '',
  firstName: '',
  lastName: '',
  email: '',
  accountRoles: [],
  mfaEnabled: false,
  dashboardSettings: {
    preferredCurrency: '',
    snapshotLayout: null
  },
  refundLimits: null,
  createdVia: ''
};

export default ProfileModel;
