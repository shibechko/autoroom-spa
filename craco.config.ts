const path = require('path');

const resolvePath = (filePath: string): string => path.resolve(__dirname, filePath);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  webpack: {
    alias: {
      '@autrm/assets': resolvePath('./src/assets'),
      '@autrm/assets/income': resolvePath('./src/assets/income'),
      '@autrm/common/components': resolvePath('./src/common/components'),
      '@autrm/common/hooks': resolvePath('./src/common/hooks'),
      '@autrm/common/tokens': resolvePath('./src/common/tokens'),
      '@autrm/common/types': resolvePath('./src/common/types'),
      '@autrm/common/utils': resolvePath('./src/common/utils'),
      '@autrm/components': resolvePath('./src/components'),
      '@autrm/pages': resolvePath('./src/pages'),
      '@autrm': resolvePath('./src')
    }
  },
};
