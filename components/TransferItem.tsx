import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/styles/styles';

interface Transfer {
  id: number;
  value: number;
  date: string;
  description: string;
  categorie: string;
  type: string;
  againstParty: {
    surname: string;
    name: string;
  };
}

interface TransferItemProps {
  Transfer: Transfer;
  onPress: (Transfer: Transfer) => void;
}

export const TransferItem: React.FC<TransferItemProps> = ({
  Transfer,
  onPress,
}) => {
  const formatarData = (dataISO: string) => {
    return new Date(dataISO).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });
  };

  const getIconName = () => {
    if (Transfer.type === 'enviada') {
      return 'arrow-up-outline';
    } else {
      return 'arrow-down-outline';
    }
  };

  return (
    <TouchableOpacity 
      style={styles.item} 
      onPress={() => onPress(Transfer)}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <View style={[
          styles.iconCircle, 
          Transfer.type === 'enviada' ? styles.iconNegative : styles.iconPositive
        ]}>
          <Ionicons 
            name={getIconName()} 
            size={16} 
            color={COLORS.text} 
          />
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={1}>
            {Transfer.description}
          </Text>
          <Text style={styles.date}>{formatarData(Transfer.date)}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.categorie}>{Transfer.categorie}</Text>
          <Text style={Transfer.type === 'enviada' ? styles.valueNegative : styles.valuePositive}>
            {Transfer.type === 'enviada' ? '-' : '+'} 
            R$ {Transfer.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.cardBackground,
    flexDirection: 'row',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 12,
  },
  iconContainer: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPositive: {
    backgroundColor: COLORS.success + '30', 
  },
  iconNegative: {
    backgroundColor: COLORS.error + '30', 
  },
  contentContainer: {
    flex: 1,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  categorie: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  valuePositive: {
    fontSize: 16,
    color: COLORS.success,
    fontWeight: '500',
  },
  valueNegative: {
    fontSize: 16,
    color: COLORS.error,
    fontWeight: '500',
  },
});