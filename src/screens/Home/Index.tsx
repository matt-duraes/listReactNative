import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    
    
    function handleParticipantAdd() {
        if(participants.includes(participantName)) {
            return Alert.alert(`Já cadastrado`, `Esse participante já foi cadastrado`);
        }
        setParticipants([...participants, participantName]);
    }

    function handleParticpantRemove(name: string) {
        participants.filter(participants => participants !== name);

        Alert.alert(`Remover`, `Deseja remover o participante ${name}?`, [
            {
                text: `Sim`,
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            }, 
            {
                text: `Não`,
                style: `cancel`
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>React Native Workshop</Text>
            <Text style={styles.eventDate}>12th October 2024</Text>
            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#ccc"
                    keyboardType="default"
                    onChangeText={name => setParticipantName(name)}
                    value={participantName}
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item} 
                        onRemove={() =>handleParticpantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}> NINGUÉM CADASTRADO</Text>
                )}
            />
        </View>
    )
}