import React from 'react'
import { connect } from 'react-redux'
import { getAllPrograms } from '../redux/actions'
import Program from './Program'
import '../styles/ProgramsList.css'

class ProgramsList extends React.Component {
    componentDidMount = async () => {
        this.props.getAllPrograms()
    }
    render() {
        return (
            <>
                <h1>Programs</h1>
                <div className={'programs-list-container'}>
                    {this.props.programs.map(program => {
                        return (
                            <Program key={program.id} {...program} />
                        )
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        programs: state.programs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllPrograms: () => {
            dispatch(
                getAllPrograms()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsList)