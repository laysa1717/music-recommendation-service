import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  getSpotifyToken(): string {
    return 'BQCDR_XExb7b9wme_7os_V4Kyidr4P7CZ1_aKBu-1DG8I6UobPUencDKhs5Up8gNLtJz5TZX9pPPt8DiWv9XJf9rMUUUOMX2Q0VK-HLBmvOfR6gCMXDtc4vwNWMBHMITQKI58NVu_LQLKBILvIm4Nc3Dfa5isTgvVxJdnrNjDs0qokJvqaaQ7Z3uwYtF8MWQ2edj4TdxNJcORHf24vG3_ghB6t8LgtUDsjLhIAfw9Qi6we94kfAy2T2Bj78XuqHxcLU_INa-BHRUifGW__C_u31J';
  }
}
