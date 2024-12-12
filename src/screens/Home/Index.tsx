import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {

    const participants = [`Mateus`, `João`, `Maria`, `José`, `Ana`, `Pedro`, `Paulo`];
    
    function handleParticipantAdd() {
        if(participants.includes(`mateus`)) {
            Alert.alert(`Já existe um participante com esse nome`)
        }
    }

    function handleParticpantRemove(name: string) {
        Alert.alert(`Remover`, `Deseja remover o participante ${name}?`, [
            {
                text: `Sim`,
                onPress: () => Alert.alert(`Participante removido com sucesso`)
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